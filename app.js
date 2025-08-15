// NIFTY500 Multi-Sector Equity Research Platform
// Data from the provided JSON
const stocksData = [
    {
        "symbol": "RELIANCE",
        "name": "Reliance Industries Ltd",
        "sector": "Petroleum Products",
        "market_cap": 1859023,
        "price": 2756.25,
        "pe_ratio": 28.5,
        "peg_ratio": 1.2,
        "roe": 12.8,
        "roce": 11.5,
        "revenue_growth": 8.5,
        "beta": 1.15,
        "dividend_yield": 0.4
    },
    {
        "symbol": "HDFCBANK",
        "name": "HDFC Bank Ltd",
        "sector": "Banks",
        "market_cap": 1528387,
        "price": 1995.75,
        "pe_ratio": 21.2,
        "peg_ratio": 1.8,
        "roe": 16.5,
        "roce": 18.2,
        "revenue_growth": 12.3,
        "beta": 0.95,
        "dividend_yield": 1.2
    },
    {
        "symbol": "TCS",
        "name": "Tata Consultancy Services",
        "sector": "IT Software",
        "market_cap": 1093350,
        "price": 3045.60,
        "pe_ratio": 25.8,
        "peg_ratio": 1.5,
        "roe": 42.5,
        "roce": 45.8,
        "revenue_growth": 9.2,
        "beta": 0.85,
        "dividend_yield": 2.8
    },
    {
        "symbol": "ICICIBANK",
        "name": "ICICI Bank Ltd",
        "sector": "Banks",
        "market_cap": 1018982,
        "price": 1456.30,
        "pe_ratio": 19.5,
        "peg_ratio": 1.6,
        "roe": 15.8,
        "roce": 17.1,
        "revenue_growth": 14.2,
        "beta": 1.05,
        "dividend_yield": 0.8
    },
    {
        "symbol": "BHARTIARTL",
        "name": "Bharti Airtel Ltd",
        "sector": "Telecom",
        "market_cap": 1123942,
        "price": 1895.45,
        "pe_ratio": 35.2,
        "peg_ratio": 2.1,
        "roe": 14.2,
        "roce": 12.8,
        "revenue_growth": 6.8,
        "beta": 0.78,
        "dividend_yield": 0.6
    },
    {
        "symbol": "INFY",
        "name": "Infosys Ltd",
        "sector": "IT Software",
        "market_cap": 601310,
        "price": 1425.80,
        "pe_ratio": 23.4,
        "peg_ratio": 1.7,
        "roe": 28.5,
        "roce": 32.1,
        "revenue_growth": 7.8,
        "beta": 0.92,
        "dividend_yield": 3.2
    },
    {
        "symbol": "SBIN",
        "name": "State Bank of India",
        "sector": "Banks",
        "market_cap": 763095,
        "price": 855.25,
        "pe_ratio": 15.2,
        "peg_ratio": 1.3,
        "roe": 13.8,
        "roce": 14.2,
        "revenue_growth": 11.5,
        "beta": 1.25,
        "dividend_yield": 1.5
    },
    {
        "symbol": "HINDUNILVR",
        "name": "Hindustan Unilever Ltd",
        "sector": "FMCG",
        "market_cap": 583392,
        "price": 2485.60,
        "pe_ratio": 58.2,
        "peg_ratio": 3.2,
        "roe": 85.2,
        "roce": 92.5,
        "revenue_growth": 5.2,
        "beta": 0.65,
        "dividend_yield": 1.8
    },
    {
        "symbol": "WIPRO",
        "name": "Wipro Ltd",
        "sector": "IT Software",
        "market_cap": 285450,
        "price": 515.75,
        "pe_ratio": 18.5,
        "peg_ratio": 2.8,
        "roe": 14.2,
        "roce": 16.8,
        "revenue_growth": 3.2,
        "beta": 0.88,
        "dividend_yield": 2.5
    },
    {
        "symbol": "BAJFINANCE",
        "name": "Bajaj Finance Ltd",
        "sector": "Financial Services",
        "market_cap": 485620,
        "price": 7985.30,
        "pe_ratio": 28.5,
        "peg_ratio": 1.4,
        "roe": 22.8,
        "roce": 24.5,
        "revenue_growth": 18.5,
        "beta": 1.32,
        "dividend_yield": 0.4
    }
];

const sectorsData = [
    {
        "name": "Banks",
        "weightage": 13.24,
        "pe_ratio": 18.5,
        "growth_rate": 12.5,
        "volatility": 22.8,
        "companies": 26
    },
    {
        "name": "IT Software",
        "weightage": 8.26,
        "pe_ratio": 22.5,
        "growth_rate": 8.2,
        "volatility": 18.5,
        "companies": 29
    },
    {
        "name": "Petroleum Products",
        "weightage": 5.89,
        "pe_ratio": 25.8,
        "growth_rate": 6.8,
        "volatility": 28.5,
        "companies": 7
    },
    {
        "name": "FMCG",
        "weightage": 3.29,
        "pe_ratio": 45.2,
        "growth_rate": 5.8,
        "volatility": 15.2,
        "companies": 6
    },
    {
        "name": "Financial Services",
        "weightage": 7.82,
        "pe_ratio": 24.5,
        "growth_rate": 15.8,
        "volatility": 25.8,
        "companies": 43
    },
    {
        "name": "Telecom",
        "weightage": 3.62,
        "pe_ratio": 32.5,
        "growth_rate": 8.5,
        "volatility": 32.8,
        "companies": 11
    }
];

const portfolioAllocations = {
    "conservative": {
        "equity": 20,
        "debt": 70,
        "alternatives": 10,
        "expected_return": 8.5,
        "risk": "Low"
    },
    "balanced": {
        "equity": 50,
        "debt": 40,
        "alternatives": 10,
        "expected_return": 11.2,
        "risk": "Medium"
    },
    "aggressive": {
        "equity": 80,
        "debt": 15,
        "alternatives": 5,
        "expected_return": 14.8,
        "risk": "High"
    }
};

// Global variables
let selectedStock = null;
let selectedSector = null;
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing application...');
    initializeTabs();
    populateSelectors();
    setTimeout(() => {
        createPortfolioCharts();
        createSectorAnalysisCharts();
        populateStockGrid();
        updateDashboard();
    }, 100);
});

// Tab Management - Fixed implementation
function initializeTabs() {
    console.log('Setting up tabs...');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = button.getAttribute('data-tab');
            console.log('Tab clicked:', tabName);
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            const targetTab = document.getElementById(tabName);
            if (targetTab) {
                targetTab.classList.add('active');
                console.log('Tab switched to:', tabName);
            }
        });
    });
}

// Populate sector and stock selectors
function populateSelectors() {
    console.log('Populating selectors...');
    const sectorSelect = document.getElementById('sector-select');
    const stockSelect = document.getElementById('stock-select');
    
    // Populate sectors
    const uniqueSectors = [...new Set(stocksData.map(stock => stock.sector))];
    uniqueSectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorSelect.appendChild(option);
    });
    
    // Populate stocks
    stocksData.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock.symbol;
        option.textContent = `${stock.symbol} - ${stock.name}`;
        stockSelect.appendChild(option);
    });
    
    // Add event listeners
    sectorSelect.addEventListener('change', handleSectorChange);
    stockSelect.addEventListener('change', handleStockChange);
}

function handleSectorChange(event) {
    selectedSector = event.target.value;
    console.log('Sector changed to:', selectedSector);
    updateStockSelector();
    updateSectorAnalysis();
}

function handleStockChange(event) {
    const symbol = event.target.value;
    console.log('Stock changed to:', symbol);
    selectedStock = symbol ? stocksData.find(stock => stock.symbol === symbol) : null;
    if (selectedStock) {
        console.log('Selected stock data:', selectedStock);
        updateAllSections();
    }
}

function updateStockSelector() {
    const stockSelect = document.getElementById('stock-select');
    const filteredStocks = selectedSector ? 
        stocksData.filter(stock => stock.sector === selectedSector) : 
        stocksData;
    
    // Clear existing options except first one
    stockSelect.innerHTML = '<option value="">Select a stock</option>';
    
    filteredStocks.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock.symbol;
        option.textContent = `${stock.symbol} - ${stock.name}`;
        stockSelect.appendChild(option);
    });
}

// Update all sections when stock is selected - Fixed implementation
function updateAllSections() {
    console.log('Updating all sections for:', selectedStock?.name);
    updateDashboard();
    updateDCFValuation();
    updateRiskAnalysis();
    updatePeerComparison();
    updateForecasts();
    highlightSelectedStock();
}

// Dashboard Updates - Fixed implementation
function updateDashboard() {
    console.log('Updating dashboard...');
    const marketCapEl = document.getElementById('market-cap');
    const peRatioEl = document.getElementById('pe-ratio');
    const roeEl = document.getElementById('roe');
    const revenueGrowthEl = document.getElementById('revenue-growth');
    
    if (selectedStock) {
        console.log('Populating dashboard with stock data:', selectedStock.symbol);
        if (marketCapEl) marketCapEl.textContent = `₹ ${(selectedStock.market_cap / 100).toFixed(0)} Cr`;
        if (peRatioEl) peRatioEl.textContent = selectedStock.pe_ratio.toFixed(1);
        if (roeEl) roeEl.textContent = `${selectedStock.roe.toFixed(1)}%`;
        if (revenueGrowthEl) revenueGrowthEl.textContent = `${selectedStock.revenue_growth.toFixed(1)}%`;
        
        createRevenueChart();
    } else {
        console.log('No stock selected, showing default values');
        if (marketCapEl) marketCapEl.textContent = '₹ --';
        if (peRatioEl) peRatioEl.textContent = '--';
        if (roeEl) roeEl.textContent = '--%';
        if (revenueGrowthEl) revenueGrowthEl.textContent = '--%';
        
        createRevenueChart(); // Show overall market data
    }
}

// Chart Creation Functions - Fixed implementation
function createRevenueChart() {
    const ctx = document.getElementById('revenue-chart');
    if (!ctx) {
        console.log('Revenue chart canvas not found');
        return;
    }
    
    if (charts.revenueChart) {
        charts.revenueChart.destroy();
    }
    
    const years = ['2020', '2021', '2022', '2023', '2024', '2025E', '2026E'];
    let revenueData;
    
    if (selectedStock) {
        const baseRevenue = 100;
        const growthRate = selectedStock.revenue_growth / 100;
        revenueData = years.map((year, index) => {
            if (index < 4) {
                return baseRevenue * Math.pow(1 + growthRate + (Math.random() - 0.5) * 0.1, index);
            } else {
                return baseRevenue * Math.pow(1 + growthRate, index);
            }
        });
    } else {
        // Market average
        revenueData = [100, 105, 112, 120, 128, 138, 148];
    }
    
    charts.revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: selectedStock ? `${selectedStock.name} Revenue` : 'Market Average Revenue',
                data: revenueData,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Revenue (Index: 2020 = 100)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
    console.log('Revenue chart created');
}

function createPortfolioCharts() {
    console.log('Creating portfolio charts...');
    const allocations = ['conservative', 'balanced', 'aggressive'];
    const colors = ['#1FB8CD', '#FFC185', '#B4413C'];
    
    allocations.forEach(allocation => {
        const ctx = document.getElementById(`${allocation}-chart`);
        if (!ctx) {
            console.log(`${allocation} chart canvas not found`);
            return;
        }
        
        const data = portfolioAllocations[allocation];
        
        charts[`${allocation}Chart`] = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Equity', 'Debt', 'Alternatives'],
                datasets: [{
                    data: [data.equity, data.debt, data.alternatives],
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
        console.log(`${allocation} portfolio chart created`);
    });
}

function createSectorAnalysisCharts() {
    console.log('Creating sector analysis charts...');
    
    // Sector Valuation Chart
    const sectorValCtx = document.getElementById('sector-valuation-chart');
    if (sectorValCtx) {
        charts.sectorValuationChart = new Chart(sectorValCtx, {
            type: 'bar',
            data: {
                labels: sectorsData.map(s => s.name),
                datasets: [
                    {
                        label: 'P/E Ratio',
                        data: sectorsData.map(s => s.pe_ratio),
                        backgroundColor: '#1FB8CD',
                        yAxisID: 'y'
                    },
                    {
                        label: 'PEG Ratio',
                        data: sectorsData.map(s => s.pe_ratio / s.growth_rate),
                        backgroundColor: '#FFC185',
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { display: true, text: 'P/E Ratio' }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { display: true, text: 'PEG Ratio' },
                        grid: { drawOnChartArea: false }
                    }
                }
            }
        });
        console.log('Sector valuation chart created');
    }
    
    // Growth vs Risk Matrix
    const growthRiskCtx = document.getElementById('growth-risk-chart');
    if (growthRiskCtx) {
        charts.growthRiskChart = new Chart(growthRiskCtx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Sectors',
                    data: sectorsData.map(s => ({ x: s.growth_rate, y: s.volatility, label: s.name })),
                    backgroundColor: '#B4413C',
                    borderColor: '#B4413C',
                    pointRadius: 8,
                    pointHoverRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: { display: true, text: 'Growth Rate (%)' }
                    },
                    y: {
                        title: { display: true, text: 'Volatility (%)' }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const point = context.raw;
                                return `${sectorsData[context.dataIndex].name}: Growth ${point.x}%, Volatility ${point.y}%`;
                            }
                        }
                    }
                }
            }
        });
        console.log('Growth vs risk chart created');
    }
}

// Stock Grid Population
function populateStockGrid() {
    console.log('Populating stock grid...');
    const stockGrid = document.getElementById('stock-grid');
    if (!stockGrid) return;
    
    stockGrid.innerHTML = '';
    
    stocksData.forEach(stock => {
        const stockCard = createStockCard(stock);
        stockGrid.appendChild(stockCard);
    });
    console.log('Stock grid populated with', stocksData.length, 'stocks');
}

function createStockCard(stock) {
    const card = document.createElement('div');
    card.className = 'stock-card';
    card.setAttribute('data-symbol', stock.symbol);
    
    card.innerHTML = `
        <div class="stock-header">
            <div>
                <div class="stock-symbol">${stock.symbol}</div>
                <div class="stock-name">${stock.name}</div>
            </div>
            <div class="stock-price">₹${stock.price.toFixed(2)}</div>
        </div>
        <div class="stock-metrics">
            <div class="metric-item">
                <span class="metric-label">P/E:</span>
                <span class="metric-val">${stock.pe_ratio}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">ROE:</span>
                <span class="metric-val">${stock.roe}%</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Growth:</span>
                <span class="metric-val">${stock.revenue_growth}%</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Sector:</span>
                <span class="metric-val">${stock.sector}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => selectStock(stock));
    
    return card;
}

function selectStock(stock) {
    console.log('Stock selected from card:', stock.symbol);
    selectedStock = stock;
    
    // Update stock selector
    document.getElementById('stock-select').value = stock.symbol;
    
    updateAllSections();
}

function highlightSelectedStock() {
    document.querySelectorAll('.stock-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    if (selectedStock) {
        const selectedCard = document.querySelector(`[data-symbol="${selectedStock.symbol}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
    }
}

// DCF Valuation
function updateDCFValuation() {
    console.log('Updating DCF valuation...');
    if (!selectedStock) {
        document.getElementById('intrinsic-value').textContent = '--';
        document.getElementById('forward-ratios').innerHTML = '<div class="empty-state"><h3>Select a stock to view DCF analysis</h3></div>';
        updateQVM();
        return;
    }
    
    calculateDCF();
    updateForwardRatios();
    updateQVM();
}

function calculateDCF() {
    if (!selectedStock) return;
    
    const growthRateEl = document.getElementById('growth-rate');
    const discountRateEl = document.getElementById('discount-rate');
    
    const growthRate = growthRateEl ? parseFloat(growthRateEl.value) / 100 : 0.1;
    const discountRate = discountRateEl ? parseFloat(discountRateEl.value) / 100 : 0.12;
    
    // Simplified DCF calculation
    const currentEarnings = selectedStock.market_cap / selectedStock.pe_ratio;
    const terminalValue = currentEarnings * (1 + growthRate) * 5 / (discountRate - 0.03);
    const dcfValue = terminalValue / Math.pow(1 + discountRate, 5);
    
    const intrinsicValueEl = document.getElementById('intrinsic-value');
    if (intrinsicValueEl) {
        intrinsicValueEl.textContent = `₹${(dcfValue / 100).toFixed(0)} Cr`;
    }
}

function updateForwardRatios() {
    if (!selectedStock) return;
    
    const costOfEquity = 12.5;
    const wacc = 9.8;
    
    const forwardPE = selectedStock.pe_ratio * 0.9; // Forward P/E typically lower
    const forwardPEG = selectedStock.peg_ratio * 0.95;
    const forwardROECOE = (selectedStock.roe * 1.1) / costOfEquity;
    const forwardROCEWACC = (selectedStock.roce * 1.1) / wacc;
    const ivBookValue = 1.2; // Assumed intrinsic value to book value ratio
    
    const ratiosHtml = `
        <div class="ratio-item">
            <div class="ratio-label">Forward P/E</div>
            <div class="ratio-value">${forwardPE.toFixed(1)}</div>
        </div>
        <div class="ratio-item">
            <div class="ratio-label">Forward PEG</div>
            <div class="ratio-value">${forwardPEG.toFixed(1)}</div>
        </div>
        <div class="ratio-item">
            <div class="ratio-label">Forward ROE/COE</div>
            <div class="ratio-value">${forwardROECOE.toFixed(2)}</div>
        </div>
        <div class="ratio-item">
            <div class="ratio-label">Forward ROCE/WACC</div>
            <div class="ratio-value">${forwardROCEWACC.toFixed(2)}</div>
        </div>
        <div class="ratio-item">
            <div class="ratio-label">IV/Book Value</div>
            <div class="ratio-value">${ivBookValue.toFixed(2)}</div>
        </div>
    `;
    
    const forwardRatiosEl = document.getElementById('forward-ratios');
    if (forwardRatiosEl) {
        forwardRatiosEl.innerHTML = ratiosHtml;
    }
}

function updateQVM() {
    const qvmValueEl = document.getElementById('qvm-value');
    const qvmInterpretationEl = document.getElementById('qvm-interpretation');
    
    if (!selectedStock) {
        if (qvmValueEl) qvmValueEl.textContent = '--';
        if (qvmInterpretationEl) qvmInterpretationEl.textContent = 'Select a stock to calculate QVM';
        return;
    }
    
    const costOfEquity = 12.5;
    const wacc = 9.8;
    
    const roeCOE = (selectedStock.roe * 1.1) / costOfEquity;
    const roceWACC = (selectedStock.roce * 1.1) / wacc;
    const ivBV = 1.2;
    const invPEG = 1 / (selectedStock.peg_ratio * 0.95);
    
    // Geometric mean
    const qvm = Math.pow(roeCOE * roceWACC * ivBV * invPEG, 1/4);
    
    if (qvmValueEl) {
        qvmValueEl.textContent = qvm.toFixed(3);
        
        if (qvm > 1) {
            qvmValueEl.className = 'qvm-value good';
            if (qvmInterpretationEl) {
                qvmInterpretationEl.textContent = '✓ Good Investment - QVM > 1 indicates favorable metrics';
            }
        } else {
            qvmValueEl.className = 'qvm-value bad';
            if (qvmInterpretationEl) {
                qvmInterpretationEl.textContent = '✗ Poor Investment - QVM < 1 indicates unfavorable metrics';
            }
        }
    }
}

// Risk Analysis
function updateRiskAnalysis() {
    if (!selectedStock) {
        const riskMetricsEl = document.getElementById('risk-metrics');
        if (riskMetricsEl) {
            riskMetricsEl.innerHTML = '<div class="empty-state"><h3>Select a stock to view risk analysis</h3></div>';
        }
        return;
    }
    
    createPorterChart();
    updateRiskMetrics();
}

function createPorterChart() {
    const ctx = document.getElementById('porter-chart');
    if (!ctx) return;
    
    if (charts.porterChart) {
        charts.porterChart.destroy();
    }
    
    // Simulated Porter's 5 Forces scores (1-10 scale)
    const porterScores = {
        'Threat of New Entrants': Math.random() * 10,
        'Bargaining Power of Suppliers': Math.random() * 10,
        'Bargaining Power of Buyers': Math.random() * 10,
        'Threat of Substitutes': Math.random() * 10,
        'Competitive Rivalry': Math.random() * 10
    };
    
    charts.porterChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(porterScores),
            datasets: [{
                label: selectedStock.name,
                data: Object.values(porterScores),
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: '#1FB8CD',
                pointBackgroundColor: '#1FB8CD',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#1FB8CD'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

function updateRiskMetrics() {
    const var95 = selectedStock.price * selectedStock.beta * 0.05; // Simplified VaR calculation
    const sharpeRatio = (selectedStock.revenue_growth - 7.2) / (selectedStock.beta * 15);
    
    const metricsHtml = `
        <div class="risk-metric-item">
            <span>Beta</span>
            <span>${selectedStock.beta}</span>
        </div>
        <div class="risk-metric-item">
            <span>Value at Risk (95%)</span>
            <span>₹${var95.toFixed(2)}</span>
        </div>
        <div class="risk-metric-item">
            <span>Sharpe Ratio</span>
            <span>${sharpeRatio.toFixed(2)}</span>
        </div>
        <div class="risk-metric-item">
            <span>Volatility</span>
            <span>${(selectedStock.beta * 20).toFixed(1)}%</span>
        </div>
    `;
    
    const riskMetricsEl = document.getElementById('risk-metrics');
    if (riskMetricsEl) {
        riskMetricsEl.innerHTML = metricsHtml;
    }
}

// Peer Comparison
function updatePeerComparison() {
    const peerTableEl = document.getElementById('peer-table');
    if (!peerTableEl) return;
    
    if (!selectedStock) {
        peerTableEl.innerHTML = '<tr><td colspan="8" class="empty-state">Select a stock to view peer comparison</td></tr>';
        return;
    }
    
    const peers = stocksData.filter(stock => 
        stock.sector === selectedStock.sector && stock.symbol !== selectedStock.symbol
    );
    
    let tableHtml = `
        <thead>
            <tr>
                <th>Company</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>P/E</th>
                <th>PEG</th>
                <th>ROE</th>
                <th>ROCE</th>
                <th>Growth</th>
            </tr>
        </thead>
        <tbody>
            <tr class="current-stock">
                <td><strong>${selectedStock.name}</strong></td>
                <td>₹${selectedStock.price}</td>
                <td>₹${(selectedStock.market_cap/100).toFixed(0)}Cr</td>
                <td>${selectedStock.pe_ratio}</td>
                <td>${selectedStock.peg_ratio}</td>
                <td>${selectedStock.roe}%</td>
                <td>${selectedStock.roce}%</td>
                <td>${selectedStock.revenue_growth}%</td>
            </tr>
    `;
    
    peers.forEach(peer => {
        tableHtml += `
            <tr>
                <td>${peer.name}</td>
                <td>₹${peer.price}</td>
                <td>₹${(peer.market_cap/100).toFixed(0)}Cr</td>
                <td>${peer.pe_ratio}</td>
                <td>${peer.peg_ratio}</td>
                <td>${peer.roe}%</td>
                <td>${peer.roce}%</td>
                <td>${peer.revenue_growth}%</td>
            </tr>
        `;
    });
    
    tableHtml += '</tbody>';
    peerTableEl.innerHTML = tableHtml;
}

// Forecasts
function updateForecasts() {
    if (!selectedStock) {
        const scenarioAnalysisEl = document.getElementById('scenario-analysis');
        if (scenarioAnalysisEl) {
            scenarioAnalysisEl.innerHTML = '<div class="empty-state"><h3>Select a stock to view forecasts</h3></div>';
        }
        return;
    }
    
    createForecastChart();
    updateScenarioAnalysis();
}

function createForecastChart() {
    const ctx = document.getElementById('forecasts-chart');
    if (!ctx) return;
    
    if (charts.forecastChart) {
        charts.forecastChart.destroy();
    }
    
    const years = ['2024', '2025E', '2026E', '2027E', '2028E'];
    const baseEarnings = selectedStock.market_cap / selectedStock.pe_ratio / 100;
    
    const revenueData = years.map((year, index) => 
        baseEarnings * Math.pow(1 + selectedStock.revenue_growth/100, index)
    );
    
    const earningsData = years.map((year, index) => 
        baseEarnings * 0.8 * Math.pow(1 + selectedStock.revenue_growth/100 * 1.2, index)
    );
    
    charts.forecastChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Revenue Forecast',
                    data: revenueData,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Earnings Forecast',
                    data: earningsData,
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: 'Value (₹ Cr)' }
                }
            }
        }
    });
}

function updateScenarioAnalysis() {
    const basePrice = selectedStock.price;
    const bullPrice = basePrice * 1.3;
    const bearPrice = basePrice * 0.7;
    
    const scenarioHtml = `
        <div class="scenario-item bull">
            <div class="scenario-title">Bull Case</div>
            <div class="scenario-value">₹${bullPrice.toFixed(2)}</div>
            <p>Strong growth, market expansion</p>
        </div>
        <div class="scenario-item base">
            <div class="scenario-title">Base Case</div>
            <div class="scenario-value">₹${basePrice.toFixed(2)}</div>
            <p>Current fundamentals maintained</p>
        </div>
        <div class="scenario-item bear">
            <div class="scenario-title">Bear Case</div>
            <div class="scenario-value">₹${bearPrice.toFixed(2)}</div>
            <p>Economic slowdown, sector headwinds</p>
        </div>
    `;
    
    const scenarioAnalysisEl = document.getElementById('scenario-analysis');
    if (scenarioAnalysisEl) {
        scenarioAnalysisEl.innerHTML = scenarioHtml;
    }
}

// Global function for DCF calculation button
window.calculateDCF = calculateDCF;