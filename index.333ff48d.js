!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var r,n,o,a;r=document.querySelectorAll("[data-go]"),n=document.querySelectorAll("[data-go-item]"),o=document.querySelectorAll(".app__step-button"),a=1,r.forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault();var i,c=e.dataset.go;1*c-a>=2||("next"===c&&(c=a+1),"prev"===c&&(c=a-1),i=a=1*c,t(o).forEach((function(t){t.classList.toggle("is-active",1*t.dataset.go<=i)})),t(n).forEach((function(t){t.classList.toggle("is-active",1*t.dataset.goItem===i)})))}))}))}();