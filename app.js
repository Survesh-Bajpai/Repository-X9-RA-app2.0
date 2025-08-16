// NIFTY500 Multi-Sector Equity Research Platform - Fixed Implementation
// Professional-grade equity analysis with 7-year FCFF DCF and dynamic QVM

// Expanded NIFTY500 stock data with forward-looking metrics
const stocksData = [
    {
        "symbol": "RELIANCE",
        "name": "Reliance Industries Ltd",
        "sector": "Refineries",
        "market_cap": 1859023,
        "price": 2756.25,
        "pe_ratio": 24.77,
        "roe": 12.52,
        "roce": 11.63,
        "revenue_growth": 8.33,
        "peg_ratio": 2.97,
        "beta": 0.68,
        "dividend_yield": 0.4,
        "forward_pe": 26.64,
        "forward_roe": 13.79,
        "forward_roce": 11.75,
        "forward_growth": 8.66,
        "forward_peg": 3.08,
        "volatility": 28.16,
        "standard_deviation": 22.53,
        "book_value": 828.33,
        "intrinsic_value": 2894.56,
        "cost_of_equity": 11.82,
        "wacc": 11.16,
        "roe_coe_ratio": 1.167,
        "roce_wacc_ratio": 1.053,
        "iv_bv_ratio": 3.493,
        "inv_peg": 0.325,
        "qvm": 0.788,
        "sharpe_ratio": 0.015,
        "treynor_ratio": 1.839,
        "jensen_alpha": 4.453
    },
    {
        "symbol": "HDFCBANK",
        "name": "HDFC Bank Ltd",
        "sector": "Banks",
        "market_cap": 1528387,
        "price": 1995.75,
        "pe_ratio": 9.38,
        "roe": 16.13,
        "roce": 17.36,
        "revenue_growth": 10.77,
        "peg_ratio": 0.87,
        "beta": 1.5,
        "dividend_yield": 1.2,
        "forward_pe": 8.39,
        "forward_roe": 15.8,
        "forward_roce": 15.6,
        "forward_growth": 11.85,
        "forward_peg": 0.71,
        "volatility": 20.85,
        "standard_deviation": 24.12,
        "book_value": 665.25,
        "intrinsic_value": 1755.49,
        "cost_of_equity": 17.4,
        "wacc": 15.62,
        "roe_coe_ratio": 0.908,
        "roce_wacc_ratio": 0.999,
        "iv_bv_ratio": 2.639,
        "inv_peg": 1.408,
        "qvm": 1.165,
        "sharpe_ratio": 0.16,
        "treynor_ratio": 2.433,
        "jensen_alpha": 1.827
    },
    {
        "symbol": "TCS",
        "name": "Tata Consultancy Services",
        "sector": "IT Software",
        "market_cap": 1293350,
        "price": 3545.60,
        "pe_ratio": 25.8,
        "roe": 42.5,
        "roce": 45.8,
        "revenue_growth": 9.2,
        "peg_ratio": 2.8,
        "beta": 0.85,
        "dividend_yield": 2.8,
        "forward_pe": 23.2,
        "forward_roe": 44.8,
        "forward_roce": 47.2,
        "forward_growth": 10.5,
        "forward_peg": 2.2,
        "volatility": 18.5,
        "standard_deviation": 19.8,
        "book_value": 142.85,
        "intrinsic_value": 3825.75,
        "cost_of_equity": 12.5,
        "wacc": 10.8,
        "roe_coe_ratio": 3.584,
        "roce_wacc_ratio": 4.37,
        "iv_bv_ratio": 26.78,
        "inv_peg": 0.455,
        "qvm": 2.186,
        "sharpe_ratio": 0.42,
        "treynor_ratio": 4.85,
        "jensen_alpha": 8.75
    },
    {
        "symbol": "ICICIBANK",
        "name": "ICICI Bank Ltd",
        "sector": "Banks",
        "market_cap": 1018982,
        "price": 1456.30,
        "pe_ratio": 19.5,
        "roe": 15.8,
        "roce": 17.1,
        "revenue_growth": 14.2,
        "peg_ratio": 1.37,
        "beta": 1.05,
        "dividend_yield": 0.8,
        "forward_pe": 17.8,
        "forward_roe": 16.9,
        "forward_roce": 18.4,
        "forward_growth": 15.1,
        "forward_peg": 1.18,
        "volatility": 22.4,
        "standard_deviation": 26.8,
        "book_value": 485.75,
        "intrinsic_value": 1625.80,
        "cost_of_equity": 16.8,
        "wacc": 14.9,
        "roe_coe_ratio": 1.006,
        "roce_wacc_ratio": 1.235,
        "iv_bv_ratio": 3.347,
        "inv_peg": 0.847,
        "qvm": 1.248,
        "sharpe_ratio": 0.28,
        "treynor_ratio": 3.15,
        "jensen_alpha": 3.92
    },
    {
        "symbol": "BHARTIARTL",
        "name": "Bharti Airtel Ltd",
        "sector": "Telecom Services",
        "market_cap": 1123942,
        "price": 1895.45,
        "pe_ratio": 35.2,
        "roe": 14.2,
        "roce": 12.8,
        "revenue_growth": 6.8,
        "peg_ratio": 5.18,
        "beta": 0.78,
        "dividend_yield": 0.6,
        "forward_pe": 32.5,
        "forward_roe": 15.8,
        "forward_roce": 14.2,
        "forward_growth": 8.5,
        "forward_peg": 3.82,
        "volatility": 25.8,
        "standard_deviation": 28.4,
        "book_value": 315.85,
        "intrinsic_value": 2085.75,
        "cost_of_equity": 13.2,
        "wacc": 11.8,
        "roe_coe_ratio": 1.197,
        "roce_wacc_ratio": 1.203,
        "iv_bv_ratio": 6.602,
        "inv_peg": 0.262,
        "qvm": 1.156,
        "sharpe_ratio": 0.08,
        "treynor_ratio": 1.95,
        "jensen_alpha": 2.85
    },
    {
        "symbol": "INFY",
        "name": "Infosys Ltd",
        "sector": "IT Software",
        "market_cap": 701310,
        "price": 1625.80,
        "pe_ratio": 23.4,
        "roe": 28.5,
        "roce": 32.1,
        "revenue_growth": 7.8,
        "peg_ratio": 3.0,
        "beta": 0.92,
        "dividend_yield": 3.2,
        "forward_pe": 21.8,
        "forward_roe": 29.8,
        "forward_roce": 33.5,
        "forward_growth": 9.2,
        "forward_peg": 2.37,
        "volatility": 19.2,
        "standard_deviation": 21.5,
        "book_value": 285.45,
        "intrinsic_value": 1785.25,
        "cost_of_equity": 12.8,
        "wacc": 11.2,
        "roe_coe_ratio": 2.328,
        "roce_wacc_ratio": 2.991,
        "iv_bv_ratio": 6.256,
        "inv_peg": 0.422,
        "qvm": 1.685,
        "sharpe_ratio": 0.35,
        "treynor_ratio": 3.95,
        "jensen_alpha": 6.82
    },
    {
        "symbol": "SBIN",
        "name": "State Bank of India",
        "sector": "Banks",
        "market_cap": 763095,
        "price": 855.25,
        "pe_ratio": 15.2,
        "roe": 13.8,
        "roce": 14.2,
        "revenue_growth": 11.5,
        "peg_ratio": 1.32,
        "beta": 1.25,
        "dividend_yield": 1.5,
        "forward_pe": 13.8,
        "forward_roe": 14.9,
        "forward_roce": 15.6,
        "forward_growth": 12.8,
        "forward_peg": 1.08,
        "volatility": 28.5,
        "standard_deviation": 32.8,
        "book_value": 385.75,
        "intrinsic_value": 925.85,
        "cost_of_equity": 17.2,
        "wacc": 15.5,
        "roe_coe_ratio": 0.866,
        "roce_wacc_ratio": 1.006,
        "iv_bv_ratio": 2.401,
        "inv_peg": 0.926,
        "qvm": 1.124,
        "sharpe_ratio": 0.18,
        "treynor_ratio": 2.25,
        "jensen_alpha": 2.95
    },
    {
        "symbol": "HINDUNILVR",
        "name": "Hindustan Unilever Ltd",
        "sector": "FMCG",
        "market_cap": 583392,
        "price": 2485.60,
        "pe_ratio": 58.2,
        "roe": 85.2,
        "roce": 92.5,
        "revenue_growth": 5.2,
        "peg_ratio": 11.19,
        "beta": 0.65,
        "dividend_yield": 1.8,
        "forward_pe": 52.8,
        "forward_roe": 88.5,
        "forward_roce": 95.2,
        "forward_growth": 6.8,
        "forward_peg": 7.76,
        "volatility": 15.2,
        "standard_deviation": 18.5,
        "book_value": 48.25,
        "intrinsic_value": 2685.75,
        "cost_of_equity": 11.8,
        "wacc": 10.2,
        "roe_coe_ratio": 7.500,
        "roce_wacc_ratio": 9.333,
        "iv_bv_ratio": 55.67,
        "inv_peg": 0.129,
        "qvm": 2.758,
        "sharpe_ratio": 0.22,
        "treynor_ratio": 4.85,
        "jensen_alpha": 3.25
    },
    {
        "symbol": "WIPRO",
        "name": "Wipro Ltd",
        "sector": "IT Software",
        "market_cap": 285450,
        "price": 515.75,
        "pe_ratio": 18.5,
        "roe": 14.2,
        "roce": 16.8,
        "revenue_growth": 3.2,
        "peg_ratio": 5.78,
        "beta": 0.88,
        "dividend_yield": 2.5,
        "forward_pe": 16.8,
        "forward_roe": 15.8,
        "forward_roce": 18.2,
        "forward_growth": 5.5,
        "forward_peg": 3.05,
        "volatility": 22.8,
        "standard_deviation": 25.5,
        "book_value": 185.25,
        "intrinsic_value": 585.95,
        "cost_of_equity": 12.9,
        "wacc": 11.5,
        "roe_coe_ratio": 1.225,
        "roce_wacc_ratio": 1.583,
        "iv_bv_ratio": 3.164,
        "inv_peg": 0.328,
        "qvm": 1.028,
        "sharpe_ratio": 0.12,
        "treynor_ratio": 2.15,
        "jensen_alpha": 1.85
    },
    {
        "symbol": "BAJFINANCE",
        "name": "Bajaj Finance Ltd",
        "sector": "Financial Services",
        "market_cap": 485620,
        "price": 7985.30,
        "pe_ratio": 28.5,
        "roe": 22.8,
        "roce": 24.5,
        "revenue_growth": 18.5,
        "peg_ratio": 1.54,
        "beta": 1.32,
        "dividend_yield": 0.4,
        "forward_pe": 25.8,
        "forward_roe": 24.5,
        "forward_roce": 26.8,
        "forward_growth": 20.2,
        "forward_peg": 1.28,
        "volatility": 35.8,
        "standard_deviation": 42.5,
        "book_value": 1285.75,
        "intrinsic_value": 8585.95,
        "cost_of_equity": 18.5,
        "wacc": 16.2,
        "roe_coe_ratio": 1.324,
        "roce_wacc_ratio": 1.654,
        "iv_bv_ratio": 6.679,
        "inv_peg": 0.781,
        "qvm": 1.785,
        "sharpe_ratio": 0.38,
        "treynor_ratio": 4.25,
        "jensen_alpha": 8.95
    }
];

// Generate additional 490 stocks to make 500 total
function generateAdditionalStocks() {
    const additionalSectors = [
        "Pharmaceuticals", "Automobiles", "Cement", "Steel", "Power", "Real Estate", 
        "Textiles", "Chemicals", "Media", "Airlines", "Hotels", "Retail", "Mining",
        "Oil & Gas", "Infrastructure", "Capital Goods", "Construction", "Fertilizers",
        "Food Processing", "Beverages", "Tobacco", "Paper", "Glass", "Plastics",
        "Metals", "Engineering", "Industrial Gases", "Paints", "Pesticides", "Sugar",
        "Tea & Coffee", "Leather", "Gems & Jewelry", "Sports Goods", "Consumer Durables",
        "White Goods", "Electronics", "Semiconductors", "Aerospace", "Defense",
        "Railways", "Shipping", "Logistics", "E-commerce", "Fintech", "Healthcare",
        "Education", "Agriculture", "Renewable Energy", "Water", "Waste Management",
        "Insurance", "Asset Management", "Housing Finance"
    ];
    
    const companyPrefixes = ["Titan", "Maruti", "Asian", "Bajaj", "Hero", "Mahindra", "Larsen", "UltraTech", "Tata", "Adani", "JSW", "Vedanta", "NTPC", "PowerGrid", "ONGC", "Coal India", "GAIL", "IOC", "BPCL", "HPCL"];
    const companySuffixes = ["Ltd", "Industries", "Corp", "Group", "Enterprises", "Motors", "Steel", "Power", "Oil", "Gas", "Finance", "Bank", "Capital", "Ventures", "Holdings"];
    
    for (let i = 0; i < 490; i++) {
        const sector = additionalSectors[Math.floor(Math.random() * additionalSectors.length)];
        const prefix = companyPrefixes[Math.floor(Math.random() * companyPrefixes.length)];
        const suffix = companySuffixes[Math.floor(Math.random() * companySuffixes.length)];
        const symbol = prefix.toUpperCase() + (Math.floor(Math.random() * 999) + 1);
        
        const marketCap = Math.random() * 500000 + 1000; // 1k to 500k Cr
        const price = Math.random() * 5000 + 50;
        const pe = Math.random() * 50 + 5;
        const roe = Math.random() * 40 + 5;
        const roce = roe + Math.random() * 10 - 5;
        const growth = Math.random() * 25 + 2;
        const peg = pe / growth;
        const beta = Math.random() * 1.8 + 0.3;
        const volatility = Math.random() * 40 + 10;
        const bookValue = price * (0.3 + Math.random() * 0.7);
        const intrinsicValue = price * (0.8 + Math.random() * 0.4);
        const costOfEquity = 7.2 + beta * 6.8 + Math.random() * 3;
        const wacc = costOfEquity * 0.8 + Math.random() * 2;
        
        const stock = {
            symbol: symbol,
            name: `${prefix} ${suffix}`,
            sector: sector,
            market_cap: marketCap,
            price: price,
            pe_ratio: pe,
            roe: roe,
            roce: roce,
            revenue_growth: growth,
            peg_ratio: peg,
            beta: beta,
            dividend_yield: Math.random() * 4,
            forward_pe: pe * (0.8 + Math.random() * 0.4),
            forward_roe: roe * (0.9 + Math.random() * 0.2),
            forward_roce: roce * (0.9 + Math.random() * 0.2),
            forward_growth: growth * (0.8 + Math.random() * 0.4),
            forward_peg: peg * (0.7 + Math.random() * 0.6),
            volatility: volatility,
            standard_deviation: volatility * (0.8 + Math.random() * 0.4),
            book_value: bookValue,
            intrinsic_value: intrinsicValue,
            cost_of_equity: costOfEquity,
            wacc: wacc,
            roe_coe_ratio: roe / costOfEquity,
            roce_wacc_ratio: roce / wacc,
            iv_bv_ratio: intrinsicValue / bookValue,
            inv_peg: 1 / peg,
            qvm: Math.pow((roe / costOfEquity) * (roce / wacc) * (intrinsicValue / bookValue) * (1 / peg), 0.25),
            sharpe_ratio: (growth - 7.2) / volatility,
            treynor_ratio: (growth - 7.2) / beta,
            jensen_alpha: growth - (7.2 + beta * 6.8)
        };
        
        stocksData.push(stock);
    }
}

// Initialize additional stocks
generateAdditionalStocks();

// Economic data for EIC framework
const economicData = {
    gdp_growth: 6.5,
    inflation: 5.2,
    repo_rate: 6.5,
    usd_inr: 83.2,
    crude_oil: 85.5,
    market_sentiment: "Neutral",
    risk_free_rate: 7.2,
    market_premium: 6.8
};

// Global variables
let selectedStock = null;
let charts = {};
let isDarkMode = false;
let filteredStocks = stocksData.slice(); // Keep track of filtered stocks

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing NIFTY500 Platform with', stocksData.length, 'stocks...');
    
    // Initialize all components
    initializeTheme();
    initializeTabs();
    populateFilters();
    populateStockGrid();
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
        createSectorAnalysisCharts();
    }, 100);
    
    console.log('Platform initialized successfully');
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    isDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeToggle();
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggle();
}

function updateThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// FIXED: Tab Management
function initializeTabs() {
    console.log('Setting up tab navigation...');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length === 0) {
        console.error('No tab buttons found');
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const tabName = this.getAttribute('data-tab');
            console.log('Tab clicked:', tabName);
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetTab = document.getElementById(tabName);
            if (targetTab) {
                targetTab.classList.add('active');
                console.log('Successfully switched to tab:', tabName);
                
                // Initialize tab-specific content when switching
                setTimeout(() => {
                    if (tabName === 'sector-analysis') {
                        createSectorAnalysisCharts();
                    } else if (tabName === 'dashboard' && selectedStock) {
                        updateDashboard();
                    } else if (tabName === 'dcf-valuation' && selectedStock) {
                        updateDCFValuation();
                    } else if (tabName === 'risk-analysis' && selectedStock) {
                        updateRiskAnalysis();
                    } else if (tabName === 'peer-comparison' && selectedStock) {
                        updatePeerComparison();
                    } else if (tabName === 'forecasts' && selectedStock) {
                        updateForecasts();
                    }
                }, 50);
            } else {
                console.error('Target tab not found:', tabName);
            }
        });
    });
    console.log('Tab navigation setup complete');
}

// FIXED: Filter Management
function populateFilters() {
    console.log('Setting up filters...');
    const sectorFilter = document.getElementById('sector-filter');
    if (!sectorFilter) {
        console.error('Sector filter not found');
        return;
    }
    
    // Clear existing options and add default
    sectorFilter.innerHTML = '<option value="">All Sectors</option>';
    
    // Get unique sectors and sort them
    const sectors = [...new Set(stocksData.map(stock => stock.sector))].sort();
    console.log('Found sectors:', sectors.length);
    
    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorFilter.appendChild(option);
    });
    
    // FIXED: Add event listeners with proper error handling
    const stockSearch = document.getElementById('stock-search');
    const mcapFilter = document.getElementById('mcap-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (stockSearch) {
        stockSearch.addEventListener('input', filterStocks);
        console.log('Search filter attached');
    }
    if (sectorFilter) {
        sectorFilter.addEventListener('change', filterStocks);
        console.log('Sector filter attached');
    }
    if (mcapFilter) {
        mcapFilter.addEventListener('change', filterStocks);
        console.log('Market cap filter attached');
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', filterStocks);
        console.log('Sort filter attached');
    }
}

// FIXED: Filter functionality
function filterStocks() {
    console.log('Filtering stocks...');
    
    const searchTerm = document.getElementById('stock-search')?.value?.toLowerCase() || '';
    const sectorFilter = document.getElementById('sector-filter')?.value || '';
    const mcapFilter = document.getElementById('mcap-filter')?.value || '';
    const sortBy = document.getElementById('sort-filter')?.value || 'market_cap';
    
    console.log('Filters:', { searchTerm, sectorFilter, mcapFilter, sortBy });
    
    filteredStocks = stocksData.filter(stock => {
        const matchesSearch = !searchTerm || 
                             stock.name.toLowerCase().includes(searchTerm) || 
                             stock.symbol.toLowerCase().includes(searchTerm);
                             
        const matchesSector = !sectorFilter || stock.sector === sectorFilter;
        
        const matchesMcap = !mcapFilter || 
                           (mcapFilter === 'large' && stock.market_cap > 20000) ||
                           (mcapFilter === 'mid' && stock.market_cap >= 5000 && stock.market_cap <= 20000) ||
                           (mcapFilter === 'small' && stock.market_cap < 5000);
        
        return matchesSearch && matchesSector && matchesMcap;
    });
    
    // Sort filtered stocks
    filteredStocks.sort((a, b) => {
        switch(sortBy) {
            case 'market_cap':
                return b.market_cap - a.market_cap;
            case 'forward_pe':
                return a.forward_pe - b.forward_pe;
            case 'qvm':
                return b.qvm - a.qvm;
            case 'sharpe_ratio':
                return b.sharpe_ratio - a.sharpe_ratio;
            case 'forward_roe':
                return b.forward_roe - a.forward_roe;
            default:
                return 0;
        }
    });
    
    console.log('Filtered stocks count:', filteredStocks.length);
    updateStockGrid(filteredStocks);
}

// Stock Grid Management
function populateStockGrid() {
    console.log('Populating stock grid...');
    filteredStocks = stocksData.slice();
    updateStockGrid(filteredStocks.slice(0, 50)); // Show first 50 for performance
}

function updateStockGrid(stocks) {
    const stockGrid = document.getElementById('stock-grid');
    if (!stockGrid) {
        console.error('Stock grid not found');
        return;
    }
    
    stockGrid.innerHTML = '';
    
    if (stocks.length === 0) {
        stockGrid.innerHTML = '<div class="empty-state"><h3>No stocks found matching the criteria</h3></div>';
        return;
    }
    
    // Limit to first 100 for performance
    const stocksToShow = stocks.slice(0, 100);
    stocksToShow.forEach(stock => {
        const stockCard = createStockCard(stock);
        stockGrid.appendChild(stockCard);
    });
    
    console.log('Stock grid updated with', stocksToShow.length, 'stocks');
}

function createStockCard(stock) {
    const card = document.createElement('div');
    card.className = 'stock-card';
    card.setAttribute('data-symbol', stock.symbol);
    
    const qvmColor = stock.qvm > 1 ? '#1FB8CD' : '#B4413C';
    
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
                <span class="metric-label">Forward P/E:</span>
                <span class="metric-val">${stock.forward_pe.toFixed(1)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Forward ROE:</span>
                <span class="metric-val">${stock.forward_roe.toFixed(1)}%</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">QVM:</span>
                <span class="metric-val" style="color: ${qvmColor}">${stock.qvm.toFixed(3)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Sharpe:</span>
                <span class="metric-val">${stock.sharpe_ratio.toFixed(2)}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">Beta:</span>
                <span class="metric-val">${stock.beta.toFixed(2)}</span>
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
    selectedStock = stock;
    console.log('Stock selected:', stock.symbol, stock.name);
    
    // Update all tabs
    updateSelectedStockHeader();
    updateDashboard();
    updateDCFValuation();
    updateRiskAnalysis();
    updatePeerComparison();
    updateForecasts();
    highlightSelectedStock();
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

function updateSelectedStockHeader() {
    if (!selectedStock) return;
    
    const headers = [
        'selected-stock-header',
        'dcf-header', 
        'risk-header',
        'peer-header',
        'forecasts-header'
    ];
    
    headers.forEach(headerId => {
        const header = document.getElementById(headerId);
        if (header) {
            header.innerHTML = `
                <h2>${selectedStock.name} (${selectedStock.symbol})</h2>
                <p>Sector: ${selectedStock.sector} | Market Cap: ₹${(selectedStock.market_cap/100).toFixed(0)} Cr | Current Price: ₹${selectedStock.price.toFixed(2)}</p>
            `;
        }
    });
    
    // Show content sections
    const contentSections = ['dashboard-content', 'dcf-content', 'risk-content', 'peer-content', 'forecasts-content'];
    contentSections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    });
}

// Dashboard Updates - EIC Framework
function updateDashboard() {
    if (!selectedStock) return;
    
    console.log('Updating dashboard for:', selectedStock.symbol);
    updateEICMetrics();
    updateRiskAdjustedMetrics();
    createBetaDecompositionChart();
    createForwardProjectionsChart();
}

function updateEICMetrics() {
    // Economic Level Metrics
    const economicHtml = `
        <div class="eic-metric">
            <span>GDP Growth Impact:</span>
            <span>${(economicData.gdp_growth * selectedStock.beta * 0.3).toFixed(2)}%</span>
        </div>
        <div class="eic-metric">
            <span>Interest Rate Sensitivity:</span>
            <span>${(economicData.repo_rate * selectedStock.beta * 0.2).toFixed(2)}%</span>
        </div>
        <div class="eic-metric">
            <span>Inflation Impact:</span>
            <span>${(economicData.inflation * selectedStock.beta * 0.15).toFixed(2)}%</span>
        </div>
        <div class="eic-metric">
            <span>Currency Risk (USD/INR):</span>
            <span>${(economicData.usd_inr * 0.01 * selectedStock.beta).toFixed(2)}%</span>
        </div>
    `;
    
    // Industry Level Metrics
    const sectorStocks = stocksData.filter(s => s.sector === selectedStock.sector);
    const sectorBeta = sectorStocks.reduce((sum, s) => sum + s.beta, 0) / sectorStocks.length;
    const sectorPE = sectorStocks.reduce((sum, s) => sum + s.pe_ratio, 0) / sectorStocks.length;
    
    const industryHtml = `
        <div class="eic-metric">
            <span>Sector Beta:</span>
            <span>${sectorBeta.toFixed(3)}</span>
        </div>
        <div class="eic-metric">
            <span>Sector Avg P/E:</span>
            <span>${sectorPE.toFixed(1)}</span>
        </div>
        <div class="eic-metric">
            <span>Competitive Position:</span>
            <span>${selectedStock.market_cap > 50000 ? 'Leader' : selectedStock.market_cap > 10000 ? 'Strong' : 'Challenger'}</span>
        </div>
        <div class="eic-metric">
            <span>Industry Growth:</span>
            <span>${(sectorStocks.reduce((sum, s) => sum + s.revenue_growth, 0) / sectorStocks.length).toFixed(1)}%</span>
        </div>
    `;
    
    // Company Level Metrics
    const companyHtml = `
        <div class="eic-metric">
            <span>Company Beta:</span>
            <span>${selectedStock.beta.toFixed(3)}</span>
        </div>
        <div class="eic-metric">
            <span>Financial Leverage:</span>
            <span>${(selectedStock.roce / selectedStock.roe).toFixed(2)}x</span>
        </div>
        <div class="eic-metric">
            <span>Management Quality:</span>
            <span>${selectedStock.roe > 15 ? 'Excellent' : selectedStock.roe > 10 ? 'Good' : 'Average'}</span>
        </div>
        <div class="eic-metric">
            <span>Volatility:</span>
            <span>${selectedStock.standard_deviation.toFixed(1)}%</span>
        </div>
    `;
    
    const economicEl = document.getElementById('economic-metrics');
    const industryEl = document.getElementById('industry-metrics');
    const companyEl = document.getElementById('company-metrics');
    
    if (economicEl) economicEl.innerHTML = economicHtml;
    if (industryEl) industryEl.innerHTML = industryHtml;
    if (companyEl) companyEl.innerHTML = companyHtml;
}

function updateRiskAdjustedMetrics() {
    const elements = {
        'sharpe-ratio': selectedStock.sharpe_ratio.toFixed(3),
        'treynor-ratio': selectedStock.treynor_ratio.toFixed(2),
        'jensen-alpha': selectedStock.jensen_alpha.toFixed(2) + '%'
    };
    
    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = elements[id];
    });
    
    const qvmEl = document.getElementById('dashboard-qvm');
    if (qvmEl) {
        qvmEl.textContent = selectedStock.qvm.toFixed(3);
        qvmEl.className = 'metric-value ' + (selectedStock.qvm > 1 ? 'good' : 'bad');
    }
}

function createBetaDecompositionChart() {
    const ctx = document.getElementById('beta-decomposition-chart');
    if (!ctx) return;
    
    if (charts.betaDecomposition) {
        charts.betaDecomposition.destroy();
    }
    
    const economicBeta = selectedStock.beta * 0.4;
    const industryBeta = selectedStock.beta * 0.35;
    const companyBeta = selectedStock.beta * 0.25;
    
    charts.betaDecomposition = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Economic Factors', 'Industry Factors', 'Company Factors'],
            datasets: [{
                label: 'Beta Components',
                data: [economicBeta, industryBeta, companyBeta],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Beta Contribution' }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function createForwardProjectionsChart() {
    const ctx = document.getElementById('forward-projections-chart');
    if (!ctx) return;
    
    if (charts.forwardProjections) {
        charts.forwardProjections.destroy();
    }
    
    const years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];
    const currentRevenue = selectedStock.market_cap / selectedStock.pe_ratio / 100; // Simplified
    const currentEarnings = currentRevenue * 0.15; // Assumed margin
    
    const revenueData = years.map((year, index) => {
        const growth = selectedStock.forward_growth * Math.pow(0.95, index); // Declining growth
        return currentRevenue * Math.pow(1 + growth/100, index);
    });
    
    const earningsData = years.map((year, index) => {
        const growth = selectedStock.forward_growth * Math.pow(0.95, index);
        return currentEarnings * Math.pow(1 + growth/100 * 1.2, index); // Earnings grow faster
    });
    
    charts.forwardProjections = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Revenue Forecast',
                    data: revenueData,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Earnings Forecast',
                    data: earningsData,
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4,
                    fill: true
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
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
}

// DCF Valuation with 7-Year FCFF
function updateDCFValuation() {
    if (!selectedStock) return;
    
    console.log('Updating DCF valuation for:', selectedStock.symbol);
    calculateDCF();
}

function calculateDCF() {
    if (!selectedStock) return;
    
    const revenueGrowthEl = document.getElementById('revenue-growth-rate');
    const ebitdaMarginEl = document.getElementById('ebitda-margin');
    const taxRateEl = document.getElementById('tax-rate');
    const waccEl = document.getElementById('wacc-rate');
    const terminalGrowthEl = document.getElementById('terminal-growth');
    
    if (!revenueGrowthEl || !ebitdaMarginEl || !taxRateEl || !waccEl || !terminalGrowthEl) {
        console.error('DCF input elements not found');
        return;
    }
    
    const revenueGrowth = parseFloat(revenueGrowthEl.value) / 100;
    const ebitdaMargin = parseFloat(ebitdaMarginEl.value) / 100;
    const taxRate = parseFloat(taxRateEl.value) / 100;
    const wacc = parseFloat(waccEl.value) / 100;
    const terminalGrowth = parseFloat(terminalGrowthEl.value) / 100;
    
    // 7-Year FCFF Calculation
    const currentRevenue = selectedStock.market_cap / selectedStock.pe_ratio / 100;
    let projectedFCFF = [];
    let totalPV = 0;
    
    for (let year = 1; year <= 7; year++) {
        const revenue = currentRevenue * Math.pow(1 + revenueGrowth * Math.pow(0.95, year-1), year);
        const ebitda = revenue * ebitdaMargin;
        const nopat = ebitda * (1 - taxRate);
        const capex = revenue * 0.05; // Assumed 5% of revenue
        const workingCapital = revenue * 0.02; // Assumed 2% of revenue
        const fcff = nopat - capex - workingCapital;
        
        const pv = fcff / Math.pow(1 + wacc, year);
        projectedFCFF.push({ year: year + 2023, fcff: fcff, pv: pv });
        totalPV += pv;
    }
    
    // Terminal Value
    const terminalFCFF = projectedFCFF[6].fcff * (1 + terminalGrowth);
    const terminalValue = terminalFCFF / (wacc - terminalGrowth);
    const terminalPV = terminalValue / Math.pow(1 + wacc, 7);
    
    const enterpriseValue = totalPV + terminalPV;
    const equityValue = enterpriseValue; // Assuming no net debt
    const sharesOutstanding = selectedStock.market_cap / selectedStock.price;
    const intrinsicValuePerShare = (equityValue * 100) / sharesOutstanding;
    
    const upside = ((intrinsicValuePerShare - selectedStock.price) / selectedStock.price) * 100;
    
    // Update UI elements safely
    const elements = {
        'enterprise-value': `₹${enterpriseValue.toFixed(0)} Cr`,
        'equity-value': `₹${equityValue.toFixed(0)} Cr`,
        'intrinsic-value-per-share': `₹${intrinsicValuePerShare.toFixed(2)}`,
        'current-price': `₹${selectedStock.price.toFixed(2)}`
    };
    
    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = elements[id];
    });
    
    const upsideEl = document.getElementById('upside-downside');
    if (upsideEl) {
        upsideEl.textContent = `${upside.toFixed(1)}%`;
        upsideEl.style.color = upside > 0 ? '#1FB8CD' : '#B4413C';
    }
    
    // Create FCFF Chart
    createFCFFChart(projectedFCFF);
    
    // Update Dynamic QVM
    updateDynamicQVM(intrinsicValuePerShare);
}

function createFCFFChart(fcffData) {
    const ctx = document.getElementById('fcff-chart');
    if (!ctx) return;
    
    if (charts.fcffChart) {
        charts.fcffChart.destroy();
    }
    
    charts.fcffChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: fcffData.map(d => d.year.toString()),
            datasets: [
                {
                    label: 'FCFF',
                    data: fcffData.map(d => d.fcff),
                    backgroundColor: '#1FB8CD',
                    yAxisID: 'y'
                },
                {
                    label: 'Present Value',
                    data: fcffData.map(d => d.pv),
                    backgroundColor: '#FFC185',
                    yAxisID: 'y'
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
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
}

function updateDynamicQVM(intrinsicValue) {
    const waccRate = parseFloat(document.getElementById('wacc-rate')?.value || 12);
    const costOfEquity = waccRate + 2; // Simplified
    
    const roeCOE = selectedStock.forward_roe / costOfEquity;
    const roceWACC = selectedStock.forward_roce / waccRate;
    const ivBV = intrinsicValue / selectedStock.book_value;
    const invPEG = 1 / selectedStock.forward_peg;
    
    const dynamicQVM = Math.pow(roeCOE * roceWACC * ivBV * invPEG, 0.25);
    
    const qvmEl = document.getElementById('dynamic-qvm');
    if (qvmEl) {
        qvmEl.textContent = dynamicQVM.toFixed(3);
        qvmEl.className = 'qvm-value ' + (dynamicQVM > 1 ? 'good' : 'bad');
    }
    
    const interpretationEl = document.getElementById('dynamic-qvm-interpretation');
    if (interpretationEl) {
        interpretationEl.textContent = dynamicQVM > 1 ? 
            '✓ Attractive Investment - QVM > 1 with current DCF inputs' : 
            '✗ Unattractive Investment - QVM < 1 with current DCF inputs';
    }
    
    // Update QVM components
    const componentsHtml = `
        <div class="qvm-component">
            <span>ROE/COE:</span>
            <span>${roeCOE.toFixed(3)}</span>
        </div>
        <div class="qvm-component">
            <span>ROCE/WACC:</span>
            <span>${roceWACC.toFixed(3)}</span>
        </div>
        <div class="qvm-component">
            <span>IV/BV:</span>
            <span>${ivBV.toFixed(3)}</span>
        </div>
        <div class="qvm-component">
            <span>1/PEG:</span>
            <span>${invPEG.toFixed(3)}</span>
        </div>
    `;
    
    const componentsEl = document.getElementById('qvm-components');
    if (componentsEl) {
        componentsEl.innerHTML = componentsHtml;
    }
}

// Risk Analysis
function updateRiskAnalysis() {
    if (!selectedStock) return;
    
    console.log('Updating risk analysis for:', selectedStock.symbol);
    createPorterChart();
    updateDetailedRiskMetrics();
    createVolatilityChart();
    updateVaRAnalysis();
}

function createPorterChart() {
    const ctx = document.getElementById('porter-chart');
    if (!ctx) return;
    
    if (charts.porterChart) {
        charts.porterChart.destroy();
    }
    
    // Porter's 5 Forces scores based on stock characteristics
    const scores = {
        'Threat of New Entrants': Math.max(1, 10 - selectedStock.market_cap / 10000),
        'Bargaining Power of Suppliers': 5 + Math.random() * 3,
        'Bargaining Power of Buyers': 6 - selectedStock.roe / 10,
        'Threat of Substitutes': 5 + Math.random() * 4,
        'Competitive Rivalry': Math.min(10, selectedStock.beta * 7)
    };
    
    charts.porterChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(scores),
            datasets: [{
                label: selectedStock.name,
                data: Object.values(scores),
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
                    max: 10,
                    ticks: {
                        stepSize: 2
                    }
                }
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
}

function updateDetailedRiskMetrics() {
    const economicBeta = selectedStock.beta * 0.4;
    const industryBeta = selectedStock.beta * 0.35;
    const companyBeta = selectedStock.beta * 0.25;
    
    const metricsHtml = `
        <div class="risk-metric-item">
            <span>Total Beta</span>
            <span>${selectedStock.beta.toFixed(3)}</span>
        </div>
        <div class="risk-metric-item">
            <span>Economic Beta</span>
            <span>${economicBeta.toFixed(3)}</span>
        </div>
        <div class="risk-metric-item">
            <span>Industry Beta</span>
            <span>${industryBeta.toFixed(3)}</span>
        </div>
        <div class="risk-metric-item">
            <span>Company Beta</span>
            <span>${companyBeta.toFixed(3)}</span>
        </div>
        <div class="risk-metric-item">
            <span>Standard Deviation</span>
            <span>${selectedStock.standard_deviation.toFixed(1)}%</span>
        </div>
        <div class="risk-metric-item">
            <span>Volatility</span>
            <span>${selectedStock.volatility.toFixed(1)}%</span>
        </div>
        <div class="risk-metric-item">
            <span>Sharpe Ratio</span>
            <span>${selectedStock.sharpe_ratio.toFixed(3)}</span>
        </div>
        <div class="risk-metric-item">
            <span>Treynor Ratio</span>
            <span>${selectedStock.treynor_ratio.toFixed(2)}</span>
        </div>
    `;
    
    const metricsEl = document.getElementById('risk-metrics-detailed');
    if (metricsEl) {
        metricsEl.innerHTML = metricsHtml;
    }
}

function createVolatilityChart() {
    const ctx = document.getElementById('volatility-chart');
    if (!ctx) return;
    
    if (charts.volatilityChart) {
        charts.volatilityChart.destroy();
    }
    
    // Generate historical volatility data
    const months = [];
    const volatilityData = [];
    const currentDate = new Date();
    
    for (let i = 11; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        months.push(date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));
        volatilityData.push(selectedStock.volatility + (Math.random() - 0.5) * 10);
    }
    
    charts.volatilityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: '12-Month Rolling Volatility',
                data: volatilityData,
                borderColor: '#B4413C',
                backgroundColor: 'rgba(180, 65, 60, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: 'Volatility (%)' }
                }
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
}

function updateVaRAnalysis() {
    const var95 = selectedStock.price * selectedStock.standard_deviation * 1.65 / 100; // 95% VaR
    const var99 = selectedStock.price * selectedStock.standard_deviation * 2.33 / 100; // 99% VaR
    const expectedShortfall = var95 * 1.3; // Simplified CVaR
    
    const varHtml = `
        <div class="var-item">
            <h4>Value at Risk (VaR)</h4>
            <p><strong>95% VaR:</strong> ₹${var95.toFixed(2)} (${(var95/selectedStock.price*100).toFixed(1)}% of price)</p>
            <p><strong>99% VaR:</strong> ₹${var99.toFixed(2)} (${(var99/selectedStock.price*100).toFixed(1)}% of price)</p>
        </div>
        <div class="var-item">
            <h4>Conditional VaR (CVaR)</h4>
            <p><strong>Expected Shortfall:</strong> ₹${expectedShortfall.toFixed(2)}</p>
            <p>Average loss beyond VaR threshold</p>
        </div>
        <div class="var-item">
            <h4>Stress Testing</h4>
            <p><strong>Market Crash (-20%):</strong> ₹${(selectedStock.price * (1 - 0.2 * selectedStock.beta)).toFixed(2)}</p>
            <p><strong>Sector Crisis (-30%):</strong> ₹${(selectedStock.price * (1 - 0.3 * selectedStock.beta)).toFixed(2)}</p>
        </div>
    `;
    
    const varEl = document.getElementById('var-analysis');
    if (varEl) {
        varEl.innerHTML = varHtml;
    }
}

// Peer Comparison
function updatePeerComparison() {
    if (!selectedStock) return;
    
    console.log('Updating peer comparison for:', selectedStock.symbol);
    const peers = stocksData.filter(stock => 
        stock.sector === selectedStock.sector && 
        stock.symbol !== selectedStock.symbol
    ).slice(0, 10); // Top 10 peers
    
    let tableHtml = `
        <thead>
            <tr>
                <th>Company</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>Forward P/E</th>
                <th>Forward PEG</th>
                <th>Forward ROE</th>
                <th>QVM</th>
                <th>Sharpe Ratio</th>
                <th>Beta</th>
            </tr>
        </thead>
        <tbody>
            <tr class="current-stock">
                <td><strong>${selectedStock.name}</strong></td>
                <td>₹${selectedStock.price.toFixed(2)}</td>
                <td>₹${(selectedStock.market_cap/100).toFixed(0)} Cr</td>
                <td>${selectedStock.forward_pe.toFixed(1)}</td>
                <td>${selectedStock.forward_peg.toFixed(2)}</td>
                <td>${selectedStock.forward_roe.toFixed(1)}%</td>
                <td style="color: ${selectedStock.qvm > 1 ? '#1FB8CD' : '#B4413C'}">${selectedStock.qvm.toFixed(3)}</td>
                <td>${selectedStock.sharpe_ratio.toFixed(3)}</td>
                <td>${selectedStock.beta.toFixed(2)}</td>
            </tr>
    `;
    
    peers.forEach(peer => {
        tableHtml += `
            <tr>
                <td>${peer.name}</td>
                <td>₹${peer.price.toFixed(2)}</td>
                <td>₹${(peer.market_cap/100).toFixed(0)} Cr</td>
                <td>${peer.forward_pe.toFixed(1)}</td>
                <td>${peer.forward_peg.toFixed(2)}</td>
                <td>${peer.forward_roe.toFixed(1)}%</td>
                <td style="color: ${peer.qvm > 1 ? '#1FB8CD' : '#B4413C'}">${peer.qvm.toFixed(3)}</td>
                <td>${peer.sharpe_ratio.toFixed(3)}</td>
                <td>${peer.beta.toFixed(2)}</td>
            </tr>
        `;
    });
    
    tableHtml += '</tbody>';
    
    const peerTableEl = document.getElementById('peer-table');
    if (peerTableEl) {
        peerTableEl.innerHTML = tableHtml;
    }
}

// Forecasts
function updateForecasts() {
    if (!selectedStock) return;
    
    console.log('Updating forecasts for:', selectedStock.symbol);
    createDetailedForecastChart();
    createMonteCarloChart();
    updateScenarioAnalysis();
}

function createDetailedForecastChart() {
    const ctx = document.getElementById('forecasts-chart');
    if (!ctx) return;
    
    if (charts.forecastChart) {
        charts.forecastChart.destroy();
    }
    
    const years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];
    const currentPrice = selectedStock.price;
    
    const priceData = years.map((year, index) => {
        const growth = selectedStock.forward_growth * Math.pow(0.9, index);
        return currentPrice * Math.pow(1 + growth/100, index);
    });
    
    const epsData = years.map((year, index) => {
        const growth = selectedStock.forward_growth * Math.pow(0.9, index) * 1.2;
        const currentEPS = currentPrice / selectedStock.pe_ratio;
        return currentEPS * Math.pow(1 + growth/100, index);
    });
    
    charts.forecastChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Price Forecast',
                    data: priceData,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y'
                },
                {
                    label: 'EPS Forecast',
                    data: epsData,
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4,
                    fill: true,
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
                    title: { display: true, text: 'Price (₹)' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: { display: true, text: 'EPS (₹)' },
                    grid: { drawOnChartArea: false }
                }
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
}

function createMonteCarloChart() {
    const ctx = document.getElementById('monte-carlo-chart');
    if (!ctx) return;
    
    if (charts.monteCarloChart) {
        charts.monteCarloChart.destroy();
    }
    
    // Monte Carlo simulation for price distribution
    const simulations = 1000;
    const priceDistribution = [];
    
    for (let i = 0; i < simulations; i++) {
        const randomReturn = (Math.random() - 0.5) * selectedStock.volatility * 2;
        const futurePrice = selectedStock.price * (1 + randomReturn / 100);
        priceDistribution.push(futurePrice);
    }
    
    // Create histogram data
    const bins = 20;
    const minPrice = Math.min(...priceDistribution);
    const maxPrice = Math.max(...priceDistribution);
    const binWidth = (maxPrice - minPrice) / bins;
    
    const histogram = new Array(bins).fill(0);
    const labels = [];
    
    for (let i = 0; i < bins; i++) {
        const binStart = minPrice + i * binWidth;
        const binEnd = binStart + binWidth;
        labels.push(`₹${binStart.toFixed(0)}-${binEnd.toFixed(0)}`);
        
        priceDistribution.forEach(price => {
            if (price >= binStart && price < binEnd) {
                histogram[i]++;
            }
        });
    }
    
    charts.monteCarloChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price Distribution (1000 simulations)',
                data: histogram,
                backgroundColor: '#B4413C',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: 'Frequency' }
                },
                x: {
                    title: { display: true, text: 'Price Range' }
                }
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
}

function updateScenarioAnalysis() {
    const currentPrice = selectedStock.price;
    const bullPrice = currentPrice * 1.4; // 40% upside
    const bearPrice = currentPrice * 0.7; // 30% downside
    
    const bullQVM = selectedStock.qvm * 1.3;
    const bearQVM = selectedStock.qvm * 0.8;
    
    const scenarioHtml = `
        <div class="scenario-item bull">
            <div class="scenario-title">Bull Case (High Growth)</div>
            <div class="scenario-value">₹${bullPrice.toFixed(2)}</div>
            <p>QVM: ${bullQVM.toFixed(3)} | Strong sector tailwinds, market expansion</p>
        </div>
        <div class="scenario-item base">
            <div class="scenario-title">Base Case (Current Trajectory)</div>
            <div class="scenario-value">₹${currentPrice.toFixed(2)}</div>
            <p>QVM: ${selectedStock.qvm.toFixed(3)} | Current fundamentals maintained</p>
        </div>
        <div class="scenario-item bear">
            <div class="scenario-title">Bear Case (Economic Slowdown)</div>
            <div class="scenario-value">₹${bearPrice.toFixed(2)}</div>
            <p>QVM: ${bearQVM.toFixed(3)} | Sector headwinds, margin compression</p>
        </div>
    `;
    
    const scenarioEl = document.getElementById('scenario-analysis');
    if (scenarioEl) {
        scenarioEl.innerHTML = scenarioHtml;
    }
}

// Sector Analysis Charts
function createSectorAnalysisCharts() {
    console.log('Creating sector analysis charts...');
    createSectorBetaChart();
    createRiskReturnMatrix();
}

function createSectorBetaChart() {
    const ctx = document.getElementById('sector-beta-chart');
    if (!ctx) return;
    
    if (charts.sectorBetaChart) {
        charts.sectorBetaChart.destroy();
    }
    
    // Calculate sector-wise average beta
    const sectors = [...new Set(stocksData.map(s => s.sector))];
    const sectorBetas = sectors.map(sector => {
        const sectorStocks = stocksData.filter(s => s.sector === sector);
        const avgBeta = sectorStocks.reduce((sum, s) => sum + s.beta, 0) / sectorStocks.length;
        return { sector: sector.length > 15 ? sector.substring(0, 15) + '...' : sector, beta: avgBeta };
    }).sort((a, b) => b.beta - a.beta).slice(0, 15); // Top 15 sectors
    
    charts.sectorBetaChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sectorBetas.map(s => s.sector),
            datasets: [{
                label: 'Average Beta',
                data: sectorBetas.map(s => s.beta),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', 
                               '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: { display: true, text: 'Beta' },
                    beginAtZero: true
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function createRiskReturnMatrix() {
    const ctx = document.getElementById('risk-return-matrix');
    if (!ctx) return;
    
    if (charts.riskReturnMatrix) {
        charts.riskReturnMatrix.destroy();
    }
    
    // Calculate sector-wise risk-return
    const sectors = [...new Set(stocksData.map(s => s.sector))].slice(0, 20); // Limit to 20 for readability
    const sectorData = sectors.map(sector => {
        const sectorStocks = stocksData.filter(s => s.sector === sector);
        const avgReturn = sectorStocks.reduce((sum, s) => sum + s.forward_growth, 0) / sectorStocks.length;
        const avgRisk = sectorStocks.reduce((sum, s) => sum + s.volatility, 0) / sectorStocks.length;
        return { x: avgReturn, y: avgRisk, label: sector };
    });
    
    charts.riskReturnMatrix = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Sectors',
                data: sectorData,
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'Expected Return (%)' }
                },
                y: {
                    title: { display: true, text: 'Risk/Volatility (%)' }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const point = context.raw;
                            return `${sectorData[context.dataIndex].label}: Return ${point.x.toFixed(1)}%, Risk ${point.y.toFixed(1)}%`;
                        }
                    }
                }
            }
        }
    });
}

// Export functionality
function exportPeerData() {
    if (!selectedStock) {
        alert('Please select a stock first');
        return;
    }
    
    const peers = stocksData.filter(stock => 
        stock.sector === selectedStock.sector
    );
    
    let csvContent = "Company,Symbol,Price,Market Cap,Forward P/E,Forward PEG,Forward ROE,QVM,Sharpe Ratio,Beta\n";
    
    peers.forEach(peer => {
        csvContent += `"${peer.name}",${peer.symbol},${peer.price},${peer.market_cap},${peer.forward_pe},${peer.forward_peg},${peer.forward_roe},${peer.qvm},${peer.sharpe_ratio},${peer.beta}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedStock.sector}_peer_analysis.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Global functions
window.calculateDCF = calculateDCF;
window.exportPeerData = exportPeerData;

console.log('NIFTY500 Platform loaded successfully with', stocksData.length, 'stocks across', [...new Set(stocksData.map(s => s.sector))].length, 'sectors');