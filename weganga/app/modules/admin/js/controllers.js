'use strict'

angular.module('weganga.admin.controllers', []).controller('AdminCrearProveedorController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.saveProveedor = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/providers', {
            name: $scope.proveedor.nombre,
            lastname: $scope.proveedor.apellidos,
            email: $scope.proveedor.email,
            phone: $scope.proveedor.telefono,
            code: $scope.proveedor.codigo,
            address: $scope.proveedor.direccion,
            dni: $scope.proveedor.dni
        }).then(function (response) {
            $state.go('admin.proveedores');
        }, function (err) {
            $scope.err = err;
        });
    }
}]).controller('AdminEditarProveedorController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/providers/' + $stateParams.id).then(function (response) {
        var resp = response.data;
        $scope.proveedor = resp.providers;
    }, function (err) {
        $scope.err = err;
    });
    $scope.updateProveedor = function () {
        $http.put('http://localhost:8080/Weganga/web/app_dev.php/api/providers/' + $stateParams.id, {
            name: $scope.proveedor.nombre,
            lastname: $scope.proveedor.apellidos,
            email: $scope.proveedor.email,
            phone: $scope.proveedor.telefono,
            code: $scope.proveedor.codigo,
            address: $scope.proveedor.direccion,
            dni: $scope.proveedor.dni
        }).then(function (response) {
            $state.go('admin.proveedores');
        }, function (err) {
            $scope.err = err;
        });
    }
}]).controller('AdminProveedorListController', ['$scope', '$state', '$http', 'popupService', function ($scope, $state, $http, popupService) {
    var providers = null;
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/providers').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/providers/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/providers').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/providers/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/providers').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminCrearImpuestoController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.saveImpuesto = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos', {
            name: $scope.impuesto.name,
            description: $scope.impuesto.description,
            tasaimpuesto: $scope.impuesto.tasaimpuesto
        }).then(function (response) {
            $state.go('admin.impuestos');
        });
    }
}]).controller('AdminEditarImpuestoController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos/' + $stateParams.id).then(function (response) {
        var resp = response.data;
        $scope.resp = resp.taxs;
        $scope.impuesto = resp.taxs;
    }, function (err) {
        $scope.err = err;
    });
    $scope.updateImpuesto = function () {
        $http.put('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos/' + $stateParams.id, {
            name: $scope.impuesto.name,
            description: $scope.impuesto.description,
            tasaimpuesto: $scope.impuesto.tasaimpuesto
        }).then(function (response) {
            $state.go('admin.impuestos');
        });
    }
}]).controller('AdminImpuestoListController', ['$scope', '$http', 'popupService', function ($scope, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/impuestos').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminOfertaListController', ['$scope', '$http', 'popupService', function ($scope, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/offers/' + id).then(function (response1) {
                $scope.eliminarval = response1;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.aprobar = function (id) {
        $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/aprobar/' + id).then(function (response1) {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }, function (err) {
            $scope.err = err;
        });
    }
}]).controller('AdminCrearReglaCarritoController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.saveReglacarrito = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars', {
            name: $scope.reglacarrito.nombre,
            description: $scope.reglacarrito.descripcion
        }).then(function (response) {
            $state.go('admin.reglacarritos');
        });
    }
}]).controller('AdminEditarReglaCarritoController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars/' + $stateParams.id).then(function (response) {
        var resp = response.data;
        $scope.reglacarrito = resp.shopcars;
    }, function (err) {
        $scope.err = err;
    });
    $scope.updateReglacarrito = function () {
        $http.put('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars/' + $stateParams.id, {
            name: $scope.reglacarrito.name,
            description: $scope.reglacarrito.description
        }).then(function (response) {
            $state.go('admin.reglacarritos');
        }, function (err) {
            $scope.err = err;
        });
    }
}]).controller('AdminReglaCarritoListController', ['$scope', '$http', 'popupService', function ($scope, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/shopcars').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminCrearReglaPromocionController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.saveReglapromocion = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/promotions', {
            name: $scope.reglapromocion.nombre,
            description: $scope.reglapromocion.descripcion
        }).then(function (response) {
            $state.go('admin.reglapromociones');
        });
    }
}]).controller('AdminEditarReglaPromocionController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/promotions/' + $stateParams.id).then(function (response) {
        var resp = response.data;
        $scope.reglapromocion = resp.promotions;
    }, function (err) {
        $scope.err = err;
    });
    $scope.updateReglapromocion = function () {
        $http.put('http://localhost:8080/Weganga/web/app_dev.php/api/promotions/' + $stateParams.id, {
            name: $scope.reglapromocion.name,
            description: $scope.reglapromocion.desciption
        }).then(function (response) {
            $state.go('admin.reglapromociones');
        });
    }
}]).controller('AdminReglaPromocionListController', ['$scope', '$http', 'popupService', function ($scope, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/promotions').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/promotions/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/promotions').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/promotions/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/promotions').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminVentaListController', ['$scope', '$http', 'popupService', function ($scope, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/sales').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/sales/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/sales').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/sales/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/sales').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminCrearUsuarioController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.saveUsuario = function () {
        if ($scope.usuario.password == $scope.usuario.confirmpassword) {
            $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/administrators', {
                name: $scope.usuario.nombre,
                lastname: $scope.usuario.apellidos,
                email: $scope.usuario.email,
                phone: $scope.usuario.telefono,
                code: $scope.usuario.code,
                address: $scope.usuario.direccion,
                username: $scope.usuario.username,
                role: $scope.usuario.role,
                password: $scope.usuario.password
            }).then(function (response) {
                $state.go('admin.usuarios');
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminEditarUsuarioController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/users/' + $stateParams.id).then(function (response) {
        var resp = response.data;
        $scope.usuario = resp.user;
    }, function (err) {
        $scope.err = err;
    });
    $scope.updateUsuario = function () {
        if ($scope.usuario.password == $scope.usuario.confirmpassword) {
            $http.put('http://localhost:8080/Weganga/web/app_dev.php/api/users/' + $stateParams.id, {
                nombre: $scope.usuario.nombre,
                apellidos: $scope.usuario.apellidos,
                email: $scope.usuario.email,
                telefono: $scope.usuario.telefono,
                direccion: $scope.usuario.direccion,
                username: $scope.usuario.username,
                role: $scope.usuario.role,
                password: $scope.usuario.password
            }).then(function (response) {
                $state.go('admin.usuarios');
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminUsuarioListController', ['$scope', '$state', '$http', 'popupService', function ($scope, $state, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/users').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/users/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/users').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/users/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/users').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AdminCrearCategoriaController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.saveCategoria = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categorias', {
            name: $scope.categoria.nombre,
            description: $scope.categoria.descripcion
        }).then(function (response) {
            $state.go('admin.categorias');
        });
    }
}]).controller('AdminEditarCategoriaController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/' + $stateParams.id).then(function (response) {
        var resp = response.data;
        $scope.categoria = resp.categorys;
    }, function (err) {
        $scope.err = err;
    });
    $scope.updateCategoria = function () {
        $http.put('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/' + $stateParams.id, {
            name: $scope.categoria.name,
            description: $scope.categoria.description
        }).then(function (response) {
            $state.go('admin.categorias');
        });
    }
}]).controller('AdminCategoriaListController', ['$scope', '$state', '$http', 'popupService', function ($scope, $state, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('ForgotPasswordController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.forgot = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/forgot', {
            username: $scope.credentials.username,
            nombre: $scope.credentials.nombre,
            email: $scope.credentials.email,
            apellidos: $scope.credentials.apellidos
        }).then(function (response) {
            var response = response.data;
            if (response.status == 'success') {
                $state.go('login');
            } else {
                $scope.invalidforgot = true;
            }
        });
    }

}]).controller('RegistrarseController', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.registrarse = function () {
        if ($scope.credentials.password == $scope.credentials.confirmpassword) {
            $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/clients', {
                    username: $scope.credentials.email,
                    password: $scope.credentials.password,
                    role: 'ROLE_CLIENT',
                    name: '',
                    lastname: '',
                    address: '',
                    code: '',
                    dni: '',
                    email: $scope.credentials.email,
                    phone: ''
                }
            ).then(function (response) {
                if (response.data != "") {
                    $state.go('login');
                } else {
                    $scope.invalid = true;
                }
            }, function (err) {
                $scope.err = err;
            });
        } else {
            $scope.noequals = true;
        }
    }
}]).controller('LoginController', ['$scope', 'authService', '$state', function ($scope, authService, $state) {

    $scope.buttonText = "Login";

    $scope.login = function () {

        $scope.buttonText = "Logging in. . .";

        authService.login($scope.credentials.username, $scope.credentials.password).then(function (data) {
            if (data == null) {
                $scope.invalidLogin = true;
            } else {
                if (data.role == 'ROLE_ADMIN') {
                    $state.go('admin.usuarios');
                } else if (data.role == 'ROLE_VENDEDOR') {
                    $state.go('vendedor.ofertas');
                } else {
                    $state.go('user.ofertas');
                }
                $scope.resp = data;
            }
        }, function (err) {
            $scope.invalidLogin = true;
            $scope.err = err;
        }).finally(function () {
            $scope.buttonText = "Login";
        });
    }
}]).controller('VendedorCrearOfertaController', ['$scope', '$state', '$http', 'user', function ($scope, $state, $http, user) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias').then(function (response1) {
        $scope.categorias = response1.data.categorys;
    });
    $scope.saveOferta = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/offers', {
            provider: user.id,
            name: $scope.oferta.name,
            conditions: $scope.oferta.conditions,
            cost: $scope.oferta.cost,
            moreinfo: $scope.oferta.moreinfo,
            place: $scope.oferta.place,
            description: $scope.oferta.description,
            rebaja1: $scope.oferta.rebaja1,
            rebaja2: $scope.oferta.rebaja2,
            rebaja3: $scope.oferta.rebaja3,
            rebaja4: $scope.oferta.rebaja4,
            rebaja5: $scope.oferta.rebaja5,
            rebaja6: $scope.oferta.rebaja6,
            rebaja7: $scope.oferta.rebaja7,
            rebaja8: $scope.oferta.rebaja8,
            rebaja9: $scope.oferta.rebaja9,
            rebaja10: $scope.oferta.rebaja10,
            categorias: $scope.oferta.categorias
        }).then(function (response) {
            $state.go('vendedor.ofertas');
        }, function (err) {
            $scope.err = err;
        });
    }
}]).controller('VendedorEditarOfertaController', ['$scope', '$state', function ($scope, $state) {

}]).controller('VendedorListOfertaController', ['$scope', '$http', 'popupService', function ($scope, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }else{
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/offers/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('VendedorCrearCategoriaController', ['$scope', '$state', '$http', 'user', function ($scope, $state, $http, user) {
    $scope.saveCategoria = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categorias', {
            name: $scope.categoria.nombre,
            description: $scope.categoria.descripcion
        }).then(function (response) {
            $state.go('vendedor.categorias');
        });
    }
}]).controller('VendedorEditarCategoriaController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/' + $stateParams.id).then(function (response) {
        $scope.resp = response.data;
        var resp = response.data;
        $scope.categoria = resp.categorys;
    }, function (err) {
        $scope.err = err;
    });
    $scope.updateCategoria = function () {
        $http.put('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/' + $stateParams.id, {
            name: $scope.categoria.name,
            description: $scope.categoria.description
        }).then(function (response) {
            $state.go('vendedor.categorias');
        });
    }
}]).controller('VendedorListCategoriaController', ['$scope', '$state', '$http', 'popupService', function ($scope, $state, $http, popupService) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias').then(function (response) {
        $scope.response = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.filtrar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/filtrar/' + $scope.valor).then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }else{
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias').then(function (response) {
                $scope.response = response.data;
            }, function (err) {
                $scope.err = err;
            });
        }
    }

    $scope.eliminar = function (id) {
        if (popupService.showPopup('Desea eliminar este registro?')) {
            $http.delete('http://localhost:8080/Weganga/web/app_dev.php/api/categorias/' + id).then(function (response) {
                $scope.eliminarval = response;
                $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/categorias').then(function (response) {
                    $scope.response = response.data;
                }, function (err) {
                    $scope.err = err;
                });
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('VendedorListPedidosController', ['$scope', '$state', function ($scope, $state) {

}]).controller('VendedorCargaMasivaController', ['$scope', '$state', function ($scope, $state) {

}]).controller('AdminController', ['$scope', 'authService', '$state', 'user', function ($scope, authService, $state, user) {

    $scope.logout = function () {
        authService.logout().then(function () {
            $state.go('login');
        });
    }
}]).controller('VendedorController', ['$scope', 'authService', '$state', 'user', function ($scope, authService, $state, user) {
    $scope.logout = function () {
        authService.logout().then(function () {
            $state.go('login');
        });
    }
}]);
