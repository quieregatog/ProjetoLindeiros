<?php
namespace core;

use src\Config;
use core\Request;

class RouterBase {

    public function run() {
        $routes = Router::getRoutes();
        $method = Request::getMethod();
        $url = Request::getAbsoluteUrl();

        // Define os itens padrão
        $controller = Config::ERROR_CONTROLLER;
        $action = Config::DEFAULT_ACTION;
        $args = [];
        
        if(isset($routes[$method])) {
            foreach($routes[$method] as $route => $callback) {
                // Identifica os argumentos e substitui por regex
                $pattern = preg_replace('(\{[a-z0-9]{1,}\})', '([a-z0-9-_]{1,})', $route);

                // Faz o match da URL
                if(preg_match('#^('.$pattern.')*$#i', $url, $matches) === 1) {
                    array_shift($matches);
                    array_shift($matches);

                    // Pega todos os argumentos para associar
                    $itens = array();
                    if(preg_match_all('(\{[a-z0-9]{1,}\})', $route, $m)) {
                        $itens = preg_replace('(\{|\})', '', $m[0]);
                    }

                    // Faz a associação
                    $args = array();
                    foreach($matches as $key => $match) {
                        $args[$itens[$key]] = $match;
                    }

                    // Seta o controller/action
                    $callbackSplit = explode('@', $callback["value"]);
                    $controller = $callbackSplit[0];
                    if(isset($callbackSplit[1])) {
                        $action = $callbackSplit[1];
                    }

                    break;
                }
            }
        }

        $controller = "src\Controllers\\$controller";
        $definedController = new $controller();

        $definedController->$action($args);
    }
    
}