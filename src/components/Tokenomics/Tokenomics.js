import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const MediaTokenomics = () => {
const tokenomicsData = [
    { 
    category: 'Total Supply', 
    value: 1000,
    color: '#ebd54733'
    },
    { 
    category: 'Creator Reserves', 
    value: 20,
    color: '#ebd5471a'
    },
    { 
    category: 'Community Allocation', 
    value: 980,
    color: '#FFBB28'
    }
];

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
        <div style={{
        backgroundColor: 'white', 
        padding: '10px', 
        border: '1px solid #ddd',
        borderRadius: '5px'
        }}>
        <p style={{fontWeight: 'bold', color: 'black'}}>{data.category}</p>
        <p style={{color: 'gray'}}>{data.value} million tokens</p>
        </div>
    );
    }
    return null;
};

return (
    <div id="tokenomics" className='bg-main'>
    <Container>
        <Card data-aos="fade-up" text="white" className="text-center bg-transparent border-0">
        <Card.Header className='border-0'>
            <h1 className='display-6 title fw-bold'>$MEDIA Tokenomics</h1>
        </Card.Header>
        <Card.Body>
            <Row className="align-items-center">
            {/* Pie Chart Column */}
            <Col md={6}>
                <div style={{width: '100%', height: '400px'}}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={tokenomicsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {tokenomicsData.map((entry) => (
                        <Cell key={entry.category} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                        layout="vertical" 
                        verticalAlign="middle" 
                        align="right"
                        iconSize={10}
                        formatter={(value, entry) => (
                        <span style={{color: 'white'}}>{value}</span>
                        )}
                    />
                    </PieChart>
                </ResponsiveContainer>
                </div>
            </Col>

            {/* Details Column */}
            <Col md={6}>
                {tokenomicsData.map((item) => (
                <Card 
                    key={item.category} 
                    bg="transparent" 
                    border='0'
                    text="white" 
                    className="mb-3"
                >
                    <Card.Body>
                    <div 
                        style={{
                        width: '15px', 
                        height: '15px', 
                        display: 'inline-block', 
                        marginRight: '10px',
                        backgroundColor: item.color
                        }}
                    />
                    <span style={{fontWeight: 'bold'}}>{item.category}</span>
                    <p className="mt-2">{item.value} million tokens</p>
                    </Card.Body>
                </Card>
                ))}
            </Col>
            </Row>
        </Card.Body>
        </Card>
    </Container>
    </div>
);
};

export default MediaTokenomics;