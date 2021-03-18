(async function () {
            var backgroundList = ["https://i.pinimg.com/564x/79/df/19/79df1999e95fe782ded56073983b733b.jpg", "https://1.bp.blogspot.com/-frGePQZe7SI/XRPEY2LS7jI/AAAAAAAAAPk/M5RyYwpIzAMAlC0rhIQkBf_L0u1PonXKQCLcBGAs/s640/CAPA-DVD-FILME-BRIGTHBURN-O-FILHO-DAS-TREVAS-2019-25-06.jpg", "http://fotos.sapo.pt/awHbwZ1nzWuB3DKwb0z8/", "https://s3.amazonaws.com/muzeez/uploads/galleries/large/galleriesFiles/5jo8goeaNWNeePa5q-1-esqueceram-de-mim.jpg"];
            var backgroundChangeIntervalSeconds = 2;
            
            // promisify image loading
            var loadImage = function loadImage(source) {
                return new Promise(function (resolve) {
                var image = new Image();
                image.src = source;

                image.onload = function () {
                    return resolve();
                };
                });
            };

            var setBackground = function setBackground() {
                // create an array from the nodeList of loginPages
                var loginPages = Array.from(document.querySelectorAll(".loginPage")); // only proceed if there are login pages that are visible               

                if (loginPages.filter(function (page) {
                return page.classList.contains("hide");
                }).length < loginPages.length) {
                // go through each login page and apply the styling
                loginPages.forEach(function (page) {
                    return page.style = "\n                            background: url(".concat(backgroundList[Math.floor(Math.random() * backgroundList.length)], ") no-repeat center center fixed; \n                            -webkit-background-size: cover; \n                            -moz-background-size: cover; \n                            -o-background-size: cover; \n                            transition: background-image 0.5s ease-in-out; \n                            -webkit-transition: background-image 0.5s ease-in-out;\n                        ");
                });
                }
            };

            document.arrive(".loginPage", setBackground); // preload all images

            for (var _i = 0, _backgroundList = backgroundList; _i < _backgroundList.length; _i++) {
                var backgroundImg = _backgroundList[_i];
                await loadImage(backgroundImg);
            } // update via interval we set 


            setInterval(setBackground, backgroundChangeIntervalSeconds * 1000);
            })();
