function Art() {
	setTimeout(function() {
		$('#art').fadeTo(1000, 0.0, function() {
			document.getElementById('art').src = "./images/art3.jpg";
		});
		$('#art').fadeTo(1000, 1);
		$('#fact').fadeTo(1000, 0.0, function() {
			document.getElementById('fact').innerHTML = "Early explorers were painfully close to finding the real Troy. Pierre Belon and Pietro Della Valle, two sixteenth-century explorers, argued that the legendary Troy was based on a town called Alexandria Troas, just 20 kilometers south of Schliemann’s dig.";
		});
		$('#fact').fadeTo(1000, 1);
		
		setTimeout(function() {
			$('#art').fadeTo(1000, 0.0, function() {
				document.getElementById('art').src = "./images/art4.jpg";
			});
			$('#art').fadeTo(1000, 1);
			$('#fact').fadeTo(1000, 0.0, function() {
				document.getElementById('fact').innerHTML = "Another Hittite document shows that the Hittite king Muwatalli II had signed a treaty with the king of Wilusa around 1280 BC. The king of Wilusa would have been relatively old, having already signed a previous treaty with Muwatalli I. That king’s name, Alexandu, is tantalizingly close to “Alexandros of Ilios,” a name sometimes applied to Paris in the Epic Cycle.";
			});
			$('#fact').fadeTo(1000, 1);
			
			setTimeout(function() {
				$('#art').fadeTo(1000, 0.0, function() {
					document.getElementById('art').src = "./images/art5.jpg";
				});
				$('#art').fadeTo(1000, 1);
				$('#fact').fadeTo(1000, 0.0, function() {
					document.getElementById('fact').innerHTML = "The distinct layers which make up the Troy site speak to a history of destruction. Each time Troy was destroyed, it would be rebuilt on the same spot. This left archaeological remains in several layers at the same site, but not all of these layers indicate that destruction was the result of a war. Troy II was destroyed by a fire, while Troy VI was probably destroyed by an earthquake.";
				});
				$('#fact').fadeTo(1000, 1);
				
				setTimeout(function() {
					$('#art').fadeTo(1000, 0.0, function() {
						document.getElementById('art').src = "./images/art6.jpg";
					});
					$('#art').fadeTo(1000, 1);
					$('#fact').fadeTo(1000, 0.0, function() {
						document.getElementById('fact').innerHTML = "Troy VI also featured some massive fortifications around the city, complete with towers. There was also a 270,000 square meter “lower city” surrounded by a ditch dug directly into rock. Not only does this suggest some ongoing hostilities with other nations, but it could corroborate Homer’s allusions to Troy’s massive walls, so great they were said to have been built by Apollo and Poseidon themselves.";
					});
					$('#fact').fadeTo(1000, 1);
					
					setTimeout(function() {
						$('#art').fadeTo(1000, 0.0, function() {
							document.getElementById('art').src = "./images/art7.jpg";
						});
						$('#art').fadeTo(1000, 1);
						$('#fact').fadeTo(1000, 0.0, function() {
							document.getElementById('fact').innerHTML = "Troy VIIa is probably the closest analog to the Troy of the Epic Cycle. Troy VIIa dates from 1300-1250 BC, roughly the time of the Tawagalawa Letter. Here, archaeologists have found evidence of fire, skeletons with trauma and bronze arrowheads, all pointing toward a violent conflict at the site. Later artifacts also show an increasing Greek influence in the area.";
						});
						$('#fact').fadeTo(1000, 1);
						
						setTimeout(function() {
							$('#art').fadeTo(1000, 0.0, function() {
								document.getElementById('art').src = "./images/art8.jpg";
							});
							$('#art').fadeTo(1000, 1);
							$('#fact').fadeTo(1000, 0.0, function() {
								document.getElementById('fact').innerHTML = "The tensions which likely led to the Trojan War started early. As early as the 15th century BC, 22 confederated Anatolian states called the Assuwa League had pitched rebellions against Wilusa and their Hittite allies. Hittite literature from the time suggests that the Assuwa League had the support of Ahhiwaya (Mycenaean Greece).";
							});
							$('#fact').fadeTo(1000, 1);
							
							setTimeout(function() {
								$('#art').fadeTo(1000, 0.0, function() {
									document.getElementById('art').src = "./images/art2.jpg";
								});
								$('#art').fadeTo(1000, 1);
								$('#fact').fadeTo(1000, 0.0, function() {
									document.getElementById('fact').innerHTML = "Schliemann’s dig suggested not only that there was a real Troy, but there were in fact many Troys. The city was destroyed continuously through fires, sieges, and other disasters. Each time, the Trojans rebuilt on the same site. Troy was named a UNESCO World Heritage Site in 1998.";
								});
								$('#fact').fadeTo(1000, 1);
								
								setTimeout(function() {
									$('#art').fadeTo(1000, 0.0, function() {
										document.getElementById('art').src = "./images/art1.jpg";
									});
									$('#art').fadeTo(1000, 1);
									$('#fact').fadeTo(1000, 0.0, function() {
										document.getElementById('fact').innerHTML = "Even in ancient times, the idea of a giant horse smuggling Greek soldiers into a city sounds pretty far-fetched. Scholars have tried to explain away the idea by suggesting that the Trojan Horse might have just been a poetic way of describing a battering ram the Greeks might have used to breach Troy’s massive, fortified gates.";
									});
									$('#fact').fadeTo(1000, 1);
								}, 15000);
							}, 15000);
						}, 15000);
					}, 15000);
				}, 15000);
			}, 15000);
		}, 15000)
	}, 15000);
}
function artMusic() {
	var ok = confirm("Would you like music?");
	if(ok == true){
		var cello = new Audio('./media/cello.mp3');
		cello.play();
	}else{
	}
}
function homeMusic() {
	/*var ok = confirm("Would you like music?");
	if(ok==true){
		var home = new Audio("./media/home.mp3");
		home.play();
	}else{
	}*/
}
$(document).ready(function() {
	Art();
	setInterval(Art, 120000);
});