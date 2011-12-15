$(document).ready(
	function(){
		// Цены 
		var price1 = 840;
		var price2 = 894;
		var price3 = 1006;
		// Расходы
		var rm1 = 0.3;
		var rm2 = 1.9;
		var rm3 = 2.1;
		// Упаковки
		var ru1 = 10;
		var ru2 = 25;
		var ru3 = 25;

		price1 = price1/ru1*rm1;
		price2 = price2/ru2*rm2;
		price3 = price3/ru3*rm3;
		
		$('form[name=]').submit(function(){
			return false;
		});
		
		$('#calcbutton').click(function(){
			var oppol = $('#calcparam1').val();
			var opsten = $('#calcparam2').val();
			var oppot = $('#calcparam3').val();
			var tszs = $('#calcparam4').val();
			var tszr = $('#calcparam5').val();

			oppol = oppol.replace(',','.');
			opsten = opsten.replace(',','.');
			oppot = oppot.replace(',','.');
			tszs = tszs.replace(',','.');
			tszr = tszr.replace(',','.');


			var oppop = eval(oppol*1+opsten*1+oppot*1);
			
			$('#oppol').text(oppol);
			$('#sumoppol').text(Math.round(oppol*price3*tszr*100)/100);
			$('#opsten').text(opsten);
			$('#sumopsten').text(Math.round(opsten*price2*tszs*100)/100);
			$('#oppot').text(oppot);
			$('#sumoppot').text(Math.round(oppot*price2*tszs*100)/100);
			$('#oppop').text(oppop);
			$('#sumoppop').text(Math.round(oppop*price1*100)/100);
			oppop = Math.round((oppop*price1*1+oppot*price2*tszs*1+opsten*price2*tszs*1+oppol*price3*tszr*1)*100)/100;
			$('#tszs').text(tszs);
			$('#tszr').text(tszr);
			$('#os').html('<b>'+oppop+'</b>');
			oppop = Math.round(rm2*tszs*(opsten*1+oppot*1)*10)/10;
			$('#rst1').text(oppop);
			oppop = Math.round(rm3*oppol*tszr*10)/10;
			$('#rams').text(oppop);
			oppop = Math.round((oppol*1+opsten*1+oppot*1)*rm1*10)/10;
			$('#rag').text(oppop);
			$('#result').show();
			return false;
		});
		$("#printbutton").click(function(){
			if ($.browser.opera)
				$('#printable').printElement({"overrideElementCSS":true});
			else
				$('#printable').printElement();
		});
	}
);
