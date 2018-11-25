

  function print(quality = 1) {
    html2canvas(document.querySelector('#content'), {
      scale: quality
    }).then(canvas => {
      var a4 = [595.28, 841.89];
      var pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save("test.pdf");
    });
  }


/* slider */

$("#slideshow > div:gt(0)").hide();
        setInterval(function() {
            $('#slideshow > div:first')
                .fadeOut(500)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
        }, 3000);
