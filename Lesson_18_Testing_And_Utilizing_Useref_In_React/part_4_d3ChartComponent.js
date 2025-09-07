import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove(); // Clear any existing content
        
        svg.append('circle')
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', 40)
            .style('fill', 'blue');
    }, []);

    return <svg ref={svgRef} width={200} height={200}></svg>;
};
