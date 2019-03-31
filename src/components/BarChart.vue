/*
 * Copyright 2019 Continuous Performance Test
 * 
 * 
 * This file is part of Continuous Performance Test.
 * https://github.com/continuousperftest/service-ui
 * 
 * Continuous Performance Test is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 * 
 * Continuous Performance Test is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE. See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with Continuous
 * Performance Test. If not, see <http://www.gnu.org/licenses/>.
 */

<template>
    <div>
        <svg 
            width="1000" 
            height="600" 
            class="bar-chart">
        </svg>
    </div>
</template>

<script>
    import Bus from '../eventBus'
    import * as d3 from 'd3'
    
    export default {
        name: 'bar-chart',
        data () {
            return {
            }
        },

        mounted() {
            Bus.$on('barChartResultData', (barChartData) => {
                this.renderBarChart(barChartData);
            });
        },

        methods: {

            renderBarChart: function(barChartData) {
                    var svg = d3.select(this.$el.firstElementChild),
                        margin = {top: 10, right: -100, bottom: 0, left: 35},
                        width = + svg.attr("width") - margin.left - margin.right,
                        height = + svg.attr("height") - margin.top - margin.bottom;

                    svg.selectAll("*").remove();
                    if (barChartData.length === 0) {
                        return
                    }

                    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
                        y = d3.scaleLinear().rangeRound([height, 0]);

                    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    
                    x.domain(barChartData.map(function(d) { return d.launchDate; }));
                    y.domain([0, d3.max(barChartData, function(d) { return d.avgTimeRqExecution; })]);

                    g.append("g")
                        .attr("class", "axis axis--x")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(x).ticks().tickFormat(function(date) {
                            return date.substring(0, 10);
                        }))
                    .selectAll("text")
                            .style("text-anchor", "end")
                            .attr("dx", "-.8em")
                            .attr("dy", "-.55em")
                            .attr("transform", "rotate(-90)" );

                    g.append("g")
                        .attr("class", "axis axis--y")
                        .call(d3.axisLeft(y).ticks());

                    g.selectAll(".bar")
                        .data(barChartData)
                        .enter().append("rect")
                        .attr("class", "bar")
                        .attr("x", function(d) { return x(d.launchDate); })
                        .attr("y", function(d) { return y(d.avgTimeRqExecution); })
                        .attr("width", x.bandwidth())
                        .attr("height", function(d) { return height - y(d.avgTimeRqExecution); });
            }
        },
        
        formatter: function(sourceDate) {
                let data = this.$moment(sourceDate, this.$moment.ISO_8601);
                return data.format('YYYY-MM-DD HH:mm:ss.SSS')
        }
    }
</script>

<style>

    .bar {
        fill: #0096d9;
    }

    .bar:hover {
        fill: #007bff;
    }

    .bar-chart {
        display: block; 
        height: 100%; 
        width: 100%;
    }

    .axis {
        font: 11px sans-serif;
    }

</style>