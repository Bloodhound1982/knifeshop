$(document).ready(function(){$(".single-item").slick({dots:!0,adaptiveHeight:!0,dotsClass:"dots"}),$(".btn-next").on("click",function(){$("#slick").slick("slickNext")}),$(".btn-prev").on("click",function(){$("#slick").slick("slickPrev")});for(var t=document.querySelectorAll(".dots>li>button"),e=0;e<t.length;e++)t[e].innerText="";for(var s=document.getElementsByClassName("accordion"),e=0;e<s.length;e++)s[e].onclick=function(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show")};for(var i=document.getElementsByClassName("knife_image"),e=0;e<i.length;e++)i[e].addEventListener("click",function(){this.flag?(this.style.width="100%",this.style.cursor="zoom-in",this.style.zIndex=1,this.flag=!1):(this.style.width="250%",this.style.cursor="zoom-out",this.style.zIndex="100",this.flag=!0)},!1)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljayIsImRvdHMiLCJhZGFwdGl2ZUhlaWdodCIsImRvdHNDbGFzcyIsIm9uIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJpbm5lclRleHQiLCJhY2MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25jbGljayIsInRoaXMiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmbGFnIiwic3R5bGUiLCJ3aWR0aCIsImN1cnNvciIsInpJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FDakJGLEVBQUUsZ0JBQWdCRyxPQUVsQkMsTUFBTSxFQUNOQyxnQkFBZ0IsRUFDaEJDLFVBQVcsU0FHWE4sRUFBRSxhQUFhTyxHQUFHLFFBQVMsV0FDMUJQLEVBQUUsVUFBVUcsTUFBTSxlQUVuQkgsRUFBRSxhQUFhTyxHQUFHLFFBQVMsV0FDMUJQLEVBQUUsVUFBVUcsTUFBTSxjQUtuQixLQUFLLEdBRkRDLEdBQU9ILFNBQVNPLGlCQUFpQixtQkFFNUJDLEVBQUksRUFBR0EsRUFBSUwsRUFBS00sT0FBUUQsSUFDaENMLEVBQUtLLEdBQUdFLFVBQVksRUFLckIsS0FBSyxHQUZEQyxHQUFNWCxTQUFTWSx1QkFBdUIsYUFFakNKLEVBQUksRUFBR0EsRUFBSUcsRUFBSUYsT0FBUUQsSUFDL0JHLEVBQUlILEdBQUdLLFFBQVUsV0FDaEJDLEtBQUtDLFVBQVVDLE9BQU8sVUFDdEJGLEtBQUtHLG1CQUFtQkYsVUFBVUMsT0FBTyxRQU0zQyxLQUFLLEdBRkRFLEdBQVFsQixTQUFTWSx1QkFBdUIsZUFFbkNKLEVBQUksRUFBR0EsRUFBSVUsRUFBTVQsT0FBUUQsSUFDakNVLEVBQU1WLEdBQUdXLGlCQUFpQixRQUFTLFdBQzdCTCxLQUFLTSxNQU1UTixLQUFLTyxNQUFNQyxNQUFRLE9BQ25CUixLQUFLTyxNQUFNRSxPQUFTLFVBQ3BCVCxLQUFLTyxNQUFNRyxPQUFTLEVBQ3BCVixLQUFLTSxNQUFPLElBUlpOLEtBQUtPLE1BQU1DLE1BQVEsT0FDbkJSLEtBQUtPLE1BQU1FLE9BQVMsV0FDcEJULEtBQUtPLE1BQU1HLE9BQVMsTUFDcEJWLEtBQUtNLE1BQU8sS0FPWCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdCQoJy5zaW5nbGUtaXRlbScpLnNsaWNrKHtcblx0Ly9cdHNldHRpbmctbWFtZTogc2V0dGluZy12YWx1ZVxuXHRkb3RzOiB0cnVlLFxuXHRhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcblx0ZG90c0NsYXNzOiAnZG90cydcblx0fSk7XG5cblx0JCgnLmJ0bi1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JCgnI3NsaWNrJykuc2xpY2soJ3NsaWNrTmV4dCcpO1xuXHR9KTtcblx0JCgnLmJ0bi1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JCgnI3NsaWNrJykuc2xpY2soJ3NsaWNrUHJldicpO1xuXHR9KTtcblxuXHR2YXIgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3RzPmxpPmJ1dHRvbicpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xuXHRcdGRvdHNbaV0uaW5uZXJUZXh0ID0gJyc7XG5cdH1cblxuXHR2YXIgYWNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkaW9uJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcblx0XHRhY2NbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJrbmlmZV9pbWFnZVwiKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0aW1hZ2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCF0aGlzLmZsYWcpIHtcblx0XHRcdFx0dGhpcy5zdHlsZS53aWR0aCA9IDI1MCArIFwiJVwiO1xuXHRcdFx0XHR0aGlzLnN0eWxlLmN1cnNvciA9IFwiem9vbS1vdXRcIjtcblx0XHRcdFx0dGhpcy5zdHlsZS56SW5kZXggPSBcIjEwMFwiO1xuXHRcdFx0XHR0aGlzLmZsYWcgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdHlsZS53aWR0aCA9IDEwMCArIFwiJVwiO1xuXHRcdFx0XHR0aGlzLnN0eWxlLmN1cnNvciA9IFwiem9vbS1pblwiO1xuXHRcdFx0XHR0aGlzLnN0eWxlLnpJbmRleCA9IDE7XG5cdFx0XHRcdHRoaXMuZmxhZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fVxufSk7Il19
