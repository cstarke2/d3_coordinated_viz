//execute script when window is loaded
window.onload = function(){
	
	var w = 1000, h = 1500;
	
	var container = d3.select("body")
	    .append("svg")
	    .attr("width", w)
		.attr("height", h)
		.attr("class", "container")
		.style("background-color", "rgba(191, 84, 46, 0.50)");
		
	var innerRect = container.append("rect")
	    .datum(400)
	    .attr("width", function(d){
			return d * 2;
		})
		.attr("height", function(d){
			return d;
			
		})
		.attr("class", "innerRect")
		.attr("x", 50)
		.attr("y", 50)
		.style("fill", "#FFF5EE");
	
	var stateDiv = [
		{
			state:'Maine',
			divorce: 14.6
		},
		{
			state:'Nevada',
			divorce: 14.2
		},
		{
			state: 'West Virginia',
			divorce: 13.9
		},
		{
			state: 'Arkansas',
			divorce: 13.5
		},
		{
			state: 'Oklahoma',
			divorce: 13.3
		}
	];
	
	var circles = container.selectAll(".circles")
		.data(stateDiv)
		.enter()
		.append("circle")
		.attr("class", "circles")
		.attr("id", function(d){
			return d.state;
		})
		.attr("r", function(d){
			var area = d.divorce * 0.01;
			return Math.sqrt(area/Math.PI);
		})
		.attr("cx", function(d, i){
			return x(i);
		})
		.attr("cy", function(d){
			return 450 - (d * 0.0005);
		});
		
	var x = d3.scaleLinear()
		.range([90, 810])
		.domain([0, 3]);
		
	var minDiv = d3.min(stateDiv, function(d){
		return d.divorce;
	});
	
	var maxDiv = d3.max(stateDiv, function(d){
		return d.divorce;
	});
	
	var y = d3.scaleLinear()
	.range([445, 60])
	.domain([0, 15])
		
	.attr("cy", function(d){
		return y(d.divorce);
	})
	.style("fill", function(d, i){
		return color(d.divorce);
	})
	.style("stroke", "#000");

	
	var yAxis = d3.axisLeft(y);
		.scale(y)
		.orient("left")
		
	var axis = container.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(60, 0)")
		.call(yAxis);
		
	yAxis(axis);
	
	var title = container.append("text")
		.attr("class", "title")
		.attr("text-anchor", "middle")
		.attr("x", 445)
		.attr("y", 60)
		.text("States with Highest Divorce Rates");
		
	var labels = container.selectAll(".labels")
		.data(stateDiv)
		.enter()
		.append("text")
		.attr("class", "labels")
		.attr("text-anchor", "left")
		})
		.attr("y", function(d){
			return y(d.divorce) + 5;
		})
		.text(function(d){
			return c.state + ", Div. " + d.divorce;
		});
	var nameLine = labels.append("tspan")
		.attr("class", "nameLine")
		.attr("x", function(d,i){
			return x(i) + Math.sqrt(d.divorce * 0.01 / Math.PI) + 5;
		})
		.text(function(d){
			return d.state;
		});
	var divLine = labels.append("tspan")
	.attr("class", "divLine")
	.attr("x", function(d,i){
		return x(i) + Math.sqrt(d.divorce * 0.01 / Math.PI) + 5;
	})
	.attr("dy", "20")
	.text(function(d){
		return "Div. " + d.divorce;
	});
	
	
	var innerRect = container.append("rect")
	    .datum(400)
	    .attr("width", function(d){
			return d * 2;
		})
		.attr("height", function(d){
			return d;
			
		})
		.attr("class", "innerRect")
		.attr("x", 50)
		.attr("y", 50)
		.style("fill", "#FFF5EE");
		
	var stateNo = [
		{
			state:'District of Columbia',
			No: 56.6
		},
		{
			state:'New York',
			No: 14.2
		},
		{
			state: 'Massachusetts',
			No: 37.5
		},
		{
			state: 'Rhode Island',
			No: 37.2
		},
		{
			state: 'Arkansas',
			No: 37
		}
	];
	var circles = container.selectAll(".circles")
		.data(stateNo)
		.enter()
		.append("circle")
		.attr("class", "circles")
		.attr("id", function(d){
			return d.state;
		})
		.attr("r", function(d){
			var area = d.No * 0.01;
			return Math.sqrt(area/Math.PI);
		})
		.attr("cx", function(d, i){
			return x(i);
		})
		.attr("cy", function(d){
			return 450 - (d * 0.0005);
		});
		
	var x = d3.scaleLinear()
		.range([90, 810])
		.domain([0, 3]);
		
	var minNo = d3.min(stateNo, function(d){
		return d.No;
	});
	
	var maxNo = d3.max(stateNo, function(d){
		return d.No;
	});
	
	var y = d3.scaleLinear()
	.range([440, 95])
	.domain([
		minNo,
		maxNo
	.attr("cy", function(d){
		return y(d.No);
	.style("fill", function(d, i){
		return color(d.No);
	})
	.style("stroke", "#000");
	
		var yAxis = d3.axisLeft(y);
		.scale(y)
		.orient("left")
		
	var axis = container.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(60, 0)")
		.call(yAxis);
		
	yAxis(axis);
	
	var title = container.append("text")
		.attr("class", "title")
		.attr("text-anchor", "middle")
		.attr("x", 445)
		.attr("y", 60)
		.text("States with Highest Rates of Never Marrying");
		
	var labels = container.selectAll(".labels")
		.data(stateNo)
		.enter()
		.append("text")
		.attr("class", "labels")
		.attr("text-anchor", "left")
		})
		.attr("y", function(d){
			return y(d.No) + 5;
		})
		.text(function(d){
			return c.state + ", No marriage " + d.No;
		});
	var nameLine = labels.append("tspan")
		.attr("class", "nameLine")
		.attr("x", function(d,i){
			return x(i) + Math.sqrt(d.No * 0.01 / Math.PI) + 5;
		})
		.text(function(d){
			return d.state;
		});
	var NoLine = labels.append("tspan")
	.attr("class", "NoLine")
	.attr("x", function(d,i){
		return x(i) + Math.sqrt(d.No * 0.01 / Math.PI) + 5;
	})
	.attr("dy", "20")
	.text(function(d){
		return "No marriage " + d.No;
	});
	}]);
	

	function setMap();
	
		var width = 1000,
		height = 500;
		
		var map = d3.select("body")
			.append("svg")
			.attr("class"), "map")
			.attr("width", width)
			.attr("height", height);
		var projection = d3.geoAlbers()
			.center([39.8, -98.55])
			.rotate([-3, 0, 0])
			.scale(6000)
			.translate([width / 2, height/ 2]);
			
		var path = d3.geoPath()
			.projection(projection);
			
		d3.queue()
			.defer(d3.csv, "data/relationship_data.csv")
			.defer(d3.json, "data/usStates.topojson")
			.await(callback);
		
		function callback(error, csvData, states){
			
		var states = map.append("path")
			.datum(usStates)
			.attr("class", "countries")
			.attr("d", path);
			
			usStates = joinData(usStates, relationship_data);
			
			var colorScale = makeColorScale(relationship_data);
			
			setEnumerationUnits(usStates, map, path);
			
			setChart(relationship_data, colorScale);
		};
	};
	
	function joinData(usStates, relationship_data){
		var usStates = topojson.feature(states, states.objects.usStates);
			console.log(usStates);
			
			var attrArray = ["Pop_Total", "Divorce", "Married", "Has_child", "Widowed", "Never_married"];
			var expressed = attrArray[0];
		
		window.onload = setMap();
			
			for(var i=0; i<csvData.length; i++){
				var csvState = csvData[i];
				var csvKey = csvState.Id2;
				
				for(var a=0; a<usStates.length; a++){
					var geojsonProps = usStates[a].properties;
					var geojsonKey = geojsonProps.Id2;
					
					if (geojsonKey == csvKey_{
						
						attrArray.forEach(function(attr_{
							var val = parseFloat(csvRegion[attr]);
							geojsonProps[attr] = val;
						});
					};
				};
			};
		return usStates;
	};
	function setGtaticule(map, path){
		
		var graticule = d3.geoGraticule()
				.step([10, 10]);
				
			var gratBackground = map.append("path")
				.datum(graticule.outline())
				.attr("class", "gratBackground")
				.attr("d", path);
				
			var gratLines = map.selectAll(".gratLines")
				.data(graticule,lines())
				.enter()
				.append("path")
				.attr("class", "gratLines")
				.attr("d", path);
	};
	function makeColorScale(data){
		var colorClasses = [
			"000080",
			"#AFEEEE",
			"#FFDAB9",
			"#008080",
			"#FFEFD5",
			"#20B2AA",
			"#FFF8DC"
		];
		var colorScale = d3.scaleQuantile()
			.range(colorClasses);
			
		var domainArray = [];
		for(var i=0; i<data.length; i++){
			var val = parseFloat(data[i][expressed]);
			domainArray.push(val);
		};
		
		var minmax = [
			d3.min(data, function(d) { return parseFloat(d[expressed]); }),
			d3.max(data, function(d) { return parseFloat(d[expressed]); })
		];
		colorScale.domain(minmax);
		
		return colorScale;
	};
	function setEnumerationUnits(usStates, map, path, colorScale){
		var states = map.selectAll(".states")
			.data(usStates)
			.enter()
			.append("path")
			.attr("class", function(d){
				return "states" + d.properties.Id2;
			})
			.attr("d", path)
			.style("fill", function(d){
				return colorScale(d.properties[expressed]);
			});
	};
	function cholopleth(props, colorScale){
		var val = parseFloat(props[expressed]);
		
		if(typeof val == 'number' && !isNaN(val)){
			return colorScale(val);
		} else {
			return "#CCC";
		};
	};
	function setMap(){
		var width = window.innerWidth * 0.5,
		height = 420;
	};
	function setChart(relationship_data, colorScale){
		var chartWidth = window.innerWidth * 0.5,
			chartHeight = 420,
			leftPadding = 28,
			rightPadding = 4,
			topBottomPadding = 5;
		
			
		var chart = d3.select("body")
			.append("svg")
			.attr("width", chartWidth)
			.attr("height", chartHeight)
			.attr("class", "chart");
		
		var bars = chart.selectAll(".bars")
			.data(relationship_data)
			.enter()
			.append("rect")
			.sort(function(a, b){
			r	eturn a[expressed] -b[expressed]
			})
			.attr("class", function(d){
				return "bars" + Id2;
			})
			.attr("width", chartWidth/ relationship_data.length - 1)
			.attr("x", function (d, i) {
				return i * (chartWidth/ relationship_data.length);
			})
			.attr("height", function(d){
				return yScale(parseFloat(d[expressed]));
			})
			.attr("y", function(d)){
				return chartHeight - yScale(parseFloat(d[expressed]));
			});
			.style("fill", function(d){
				return cholopleth(d, colorScale);
			});
		var chartTitle = chart.append("text")
			.attr("x", 20)
			.attr("y", 40)
			.attr("class", "chartTitle")
			.text("Percentage of" + expressed[2] + "in the United States");
		);
	};
	function createDropdown(relationship_data){
		
		var dropdown = d3.select("body")
			.append("select")
			.attr("class", "dropdown");
		
		var titleOption = dropdown.append("option")
			.attr("class", "titleOption")
			.attr("disabled", "true")
			.text("Select Attribute");
			
		var attrOptions = dropdown.selectAll("attrOptions")
			.data(attrArray)
			.enter()
			.append("option")
			.attr("value", function(d){ return d})
			.text(function(d){ return d});
	};
	function updateChart(bars, n, colorScale){
		bars.attr("x", function(d, i){
			return i * (chartInnerWidth / n) + leftPadding;
		})
		
		.attr("height", function(d, i){
			return 463 - yScales(parseFloat(d[expressed]));
		})
		.attr("y", function(d){
			return yScale(parseFloat(d[expressed])) + topBottomPadding;
		})
		.style("fill", function (d){
			return cholopleth(d, colorScale);
		});
	};
	function highlight(props){
		
		var selected = d3.selectAll("." + props.Id2)
			.style("stroke", "blue")
			.style("stroke-width", "1.5");
	};
	function moveLabel(){
		var labelWidth = d3.select(".infolabel")
			.node()
			.getBoundingClientRect()
			.width;
			
		var x1 = d3.event.clientX + 13,
			y1 = d3.event.clientY - 60,
			x2 = d3.event.clientX - labelWidth - 15,
			y2 = d3.event.clientY + 25;
			
		var x = d3.event.clientX > window.innerWidth - labelWidth - 20 ? x2 : x1;
		
		var y = d3.event.clientY < 75 ? y2: y1;
		d3.select(".infolabel")
			.style("left", x + "px")
			.style("top", y + "px")
	};
	
	
	
	




	
	

