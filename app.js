// NIFTY500 Multi-Sector Equity Research Platform - Advanced JavaScript Application
// Research Scientist - Survesh Bajpai | Email: Surveshb2@gmail.com

// Application State and Data Management
const AppState = {
    currentSection: 'dashboard',
    selectedSector: 'all',
    selectedIndex: null,
    selectedStocks: [],
    filters: {
        mcap: 'all',
        sector: 'all',
        risk: 'all'
    },
    charts: {},
    theme: 'light'
};

// Comprehensive NIFTY500 Dataset
const DataStore = {
    companies: [
        // Banking Sector
        {"id": 1, "name": "HDFC Bank Ltd", "ticker": "HDFCBANK", "sector": "Banking", "market_cap": 397696.91, "current_price": 2848.00, "fy26_pe": 16.56, "fy26_roe": 25.45, "fy26_eps_growth": 11.86, "fy26_revenue_growth": 11.65, "category": "Large Cap", "risk_rating": "Low", "esg_score": 78.5, "beta": 1.2, "gross_margin": 45.2, "operating_margin": 38.5, "ebitda_margin": 41.2, "net_margin": 22.8, "current_ratio": 1.8, "debt_equity": 0.4, "price_book": 3.2, "ev_ebitda": 18.5, "dividend_yield": 1.2},
        {"id": 2, "name": "ICICI Bank Ltd", "ticker": "ICICIBANK", "sector": "Banking", "market_cap": 156644.13, "current_price": 1568.00, "fy26_pe": 13.83, "fy26_roe": 35.22, "fy26_eps_growth": 26.71, "fy26_revenue_growth": 13.24, "category": "Large Cap", "risk_rating": "Low", "esg_score": 82.1, "beta": 1.1, "gross_margin": 42.8, "operating_margin": 35.2, "ebitda_margin": 38.9, "net_margin": 21.5, "current_ratio": 1.9, "debt_equity": 0.3, "price_book": 2.8, "ev_ebitda": 15.2, "dividend_yield": 1.8},
        {"id": 3, "name": "State Bank of India", "ticker": "SBIN", "sector": "Banking", "market_cap": 45000, "current_price": 505, "fy26_pe": 8.2, "fy26_roe": 18.5, "fy26_eps_growth": 15.2, "fy26_revenue_growth": 12.8, "category": "Large Cap", "risk_rating": "Medium", "esg_score": 65.2, "beta": 1.4, "gross_margin": 38.5, "operating_margin": 28.2, "ebitda_margin": 32.1, "net_margin": 18.2, "current_ratio": 1.6, "debt_equity": 0.8, "price_book": 1.2, "ev_ebitda": 12.8, "dividend_yield": 3.2},
        
        // Information Technology Sector
        {"id": 4, "name": "Tata Consultancy Services", "ticker": "TCS", "sector": "Information Technology", "market_cap": 450000, "current_price": 3200, "fy26_pe": 22.4, "fy26_roe": 48.2, "fy26_eps_growth": 8.5, "fy26_revenue_growth": 9.2, "category": "Large Cap", "risk_rating": "Low", "esg_score": 85.3, "beta": 0.8, "gross_margin": 38.2, "operating_margin": 28.5, "ebitda_margin": 32.1, "net_margin": 21.8, "current_ratio": 3.2, "debt_equity": 0.1, "price_book": 8.5, "ev_ebitda": 25.2, "dividend_yield": 3.5},
        {"id": 5, "name": "Infosys Ltd", "ticker": "INFY", "sector": "Information Technology", "market_cap": 320000, "current_price": 1450, "fy26_pe": 20.8, "fy26_roe": 28.5, "fy26_eps_growth": 7.2, "fy26_revenue_growth": 8.8, "category": "Large Cap", "risk_rating": "Low", "esg_score": 88.2, "beta": 0.9, "gross_margin": 36.8, "operating_margin": 26.2, "ebitda_margin": 29.5, "net_margin": 20.2, "current_ratio": 2.8, "debt_equity": 0.0, "price_book": 6.2, "ev_ebitda": 22.8, "dividend_yield": 2.8},
        {"id": 6, "name": "HCL Technologies", "ticker": "HCLTECH", "sector": "Information Technology", "market_cap": 180000, "current_price": 1490, "fy26_pe": 18.5, "fy26_roe": 22.8, "fy26_eps_growth": 9.8, "fy26_revenue_growth": 10.5, "category": "Large Cap", "risk_rating": "Low", "esg_score": 78.5, "beta": 1.0, "gross_margin": 34.2, "operating_margin": 22.8, "ebitda_margin": 26.5, "net_margin": 18.5, "current_ratio": 2.4, "debt_equity": 0.2, "price_book": 4.8, "ev_ebitda": 18.2, "dividend_yield": 3.8},
        
        // Healthcare Sector
        {"id": 7, "name": "Sun Pharmaceutical", "ticker": "SUNPHARMA", "sector": "Healthcare", "market_cap": 125000, "current_price": 1250, "fy26_pe": 25.2, "fy26_roe": 18.5, "fy26_eps_growth": 12.8, "fy26_revenue_growth": 11.2, "category": "Large Cap", "risk_rating": "Medium", "esg_score": 72.5, "beta": 0.7, "gross_margin": 68.2, "operating_margin": 22.8, "ebitda_margin": 26.5, "net_margin": 16.2, "current_ratio": 2.1, "debt_equity": 0.1, "price_book": 3.2, "ev_ebitda": 22.8, "dividend_yield": 1.2},
        {"id": 8, "name": "Dr Reddys Laboratories", "ticker": "DRREDDY", "sector": "Healthcare", "market_cap": 85000, "current_price": 5100, "fy26_pe": 22.8, "fy26_roe": 15.2, "fy26_eps_growth": 14.5, "fy26_revenue_growth": 12.8, "category": "Large Cap", "risk_rating": "Medium", "esg_score": 68.5, "beta": 0.8, "gross_margin": 65.8, "operating_margin": 18.5, "ebitda_margin": 22.8, "net_margin": 12.8, "current_ratio": 1.8, "debt_equity": 0.2, "price_book": 2.8, "ev_ebitda": 18.5, "dividend_yield": 0.8},
        
        // FMCG Sector
        {"id": 9, "name": "Hindustan Unilever", "ticker": "HINDUNILVR", "sector": "FMCG", "market_cap": 520000, "current_price": 2200, "fy26_pe": 55.2, "fy26_roe": 85.2, "fy26_eps_growth": 8.5, "fy26_revenue_growth": 7.2, "category": "Large Cap", "risk_rating": "Low", "esg_score": 92.5, "beta": 0.5, "gross_margin": 52.8, "operating_margin": 28.5, "ebitda_margin": 32.1, "net_margin": 18.5, "current_ratio": 0.8, "debt_equity": 0.0, "price_book": 12.8, "ev_ebitda": 48.5, "dividend_yield": 2.8},
        {"id": 10, "name": "ITC Ltd", "ticker": "ITC", "sector": "FMCG", "market_cap": 380000, "current_price": 305, "fy26_pe": 28.5, "fy26_roe": 28.5, "fy26_eps_growth": 9.2, "fy26_revenue_growth": 8.8, "category": "Large Cap", "risk_rating": "Low", "esg_score": 78.5, "beta": 0.6, "gross_margin": 68.5, "operating_margin": 38.2, "ebitda_margin": 42.8, "net_margin": 28.5, "current_ratio": 2.8, "debt_equity": 0.0, "price_book": 6.2, "ev_ebitda": 22.8, "dividend_yield": 5.2},
        
        // Oil & Gas Sector
        {"id": 11, "name": "Reliance Industries", "ticker": "RELIANCE", "sector": "Oil & Gas", "market_cap": 1200000, "current_price": 2800, "fy26_pe": 15.2, "fy26_roe": 12.8, "fy26_eps_growth": 10.5, "fy26_revenue_growth": 8.9, "category": "Large Cap", "risk_rating": "Medium", "esg_score": 75.2, "beta": 1.0, "gross_margin": 28.5, "operating_margin": 12.8, "ebitda_margin": 18.5, "net_margin": 8.2, "current_ratio": 1.2, "debt_equity": 0.4, "price_book": 1.8, "ev_ebitda": 8.5, "dividend_yield": 0.8},
        {"id": 12, "name": "Oil & Natural Gas Corp", "ticker": "ONGC", "sector": "Oil & Gas", "market_cap": 220000, "current_price": 175, "fy26_pe": 8.5, "fy26_roe": 15.2, "fy26_eps_growth": 12.8, "fy26_revenue_growth": 10.2, "category": "Large Cap", "risk_rating": "High", "esg_score": 58.2, "beta": 1.3, "gross_margin": 65.2, "operating_margin": 28.5, "ebitda_margin": 38.2, "net_margin": 18.5, "current_ratio": 1.5, "debt_equity": 0.2, "price_book": 1.2, "ev_ebitda": 5.2, "dividend_yield": 8.5},
        
        // Automobile Sector
        {"id": 13, "name": "Maruti Suzuki India", "ticker": "MARUTI", "sector": "Automobile", "market_cap": 320000, "current_price": 10500, "fy26_pe": 28.5, "fy26_roe": 18.2, "fy26_eps_growth": 15.8, "fy26_revenue_growth": 12.5, "category": "Large Cap", "risk_rating": "Medium", "esg_score": 72.8, "beta": 1.1, "gross_margin": 18.5, "operating_margin": 8.2, "ebitda_margin": 12.8, "net_margin": 6.8, "current_ratio": 1.8, "debt_equity": 0.1, "price_book": 3.8, "ev_ebitda": 22.5, "dividend_yield": 1.8},
        {"id": 14, "name": "Tata Motors Ltd", "ticker": "TATAMOTORS", "sector": "Automobile", "market_cap": 185000, "current_price": 510, "fy26_pe": 18.2, "fy26_roe": 22.5, "fy26_eps_growth": 25.8, "fy26_revenue_growth": 18.2, "category": "Large Cap", "risk_rating": "High", "esg_score": 65.2, "beta": 1.5, "gross_margin": 12.8, "operating_margin": 2.8, "ebitda_margin": 8.5, "net_margin": 1.2, "current_ratio": 1.2, "debt_equity": 0.8, "price_book": 2.2, "ev_ebitda": 15.8, "dividend_yield": 0.5},
        
        // Financial Services
        {"id": 15, "name": "Bajaj Finance Ltd", "ticker": "BAJFINANCE", "sector": "Financial Services", "market_cap": 385000, "current_price": 6200, "fy26_pe": 28.5, "fy26_roe": 22.8, "fy26_eps_growth": 18.5, "fy26_revenue_growth": 22.8, "category": "Large Cap", "risk_rating": "Medium", "esg_score": 68.5, "beta": 1.2, "gross_margin": 78.5, "operating_margin": 58.2, "ebitda_margin": 62.8, "net_margin": 28.5, "current_ratio": 1.8, "debt_equity": 6.8, "price_book": 5.2, "ev_ebitda": 22.8, "dividend_yield": 0.8},
        
        // Capital Goods
        {"id": 16, "name": "Larsen & Toubro", "ticker": "LT", "sector": "Capital Goods", "market_cap": 195000, "current_price": 1380, "fy26_pe": 22.8, "fy26_roe": 15.2, "fy26_eps_growth": 18.5, "fy26_revenue_growth": 15.8, "category": "Large Cap", "risk_rating": "Medium", "esg_score": 78.2, "beta": 1.0, "gross_margin": 22.8, "operating_margin": 8.5, "ebitda_margin": 12.8, "net_margin": 5.8, "current_ratio": 1.5, "debt_equity": 0.4, "price_book": 2.8, "ev_ebitda": 18.5, "dividend_yield": 2.2}
    ],
    
    sectors: [
        {"name": "Banking", "weightage": 13.41, "companies_count": 15, "avg_pe": 12.8, "avg_growth": 15.2, "risk_level": "Medium", "icon": "🏦"},
        {"name": "Information Technology", "weightage": 8.89, "companies_count": 10, "avg_pe": 22.4, "avg_growth": 8.5, "risk_level": "Low", "icon": "💻"},
        {"name": "Healthcare", "weightage": 6.55, "companies_count": 10, "avg_pe": 28.5, "avg_growth": 14.8, "risk_level": "Low", "icon": "🏥"},
        {"name": "FMCG", "weightage": 5.96, "companies_count": 10, "avg_pe": 35.2, "avg_growth": 9.8, "risk_level": "Low", "icon": "🛒"},
        {"name": "Oil & Gas", "weightage": 6.81, "companies_count": 8, "avg_pe": 15.2, "avg_growth": 10.5, "risk_level": "High", "icon": "⛽"},
        {"name": "Automobile", "weightage": 7.40, "companies_count": 10, "avg_pe": 18.9, "avg_growth": 16.2, "risk_level": "Medium", "icon": "🚗"},
        {"name": "Financial Services", "weightage": 8.84, "companies_count": 9, "avg_pe": 18.7, "avg_growth": 12.8, "risk_level": "Medium", "icon": "💰"},
        {"name": "Capital Goods", "weightage": 4.67, "companies_count": 10, "avg_pe": 32.1, "avg_growth": 18.5, "risk_level": "Medium", "icon": "🏭"}
    ],

    indices: [
        {"name": "NIFTY 50", "key": "NIFTY50", "market_cap": 11672780, "avg_pe": 20.29, "expected_growth": 15.81, "companies": 50},
        {"name": "NIFTY Next 50", "key": "NIFTYNEXT50", "market_cap": 5217921, "avg_pe": 21.27, "expected_growth": 14.85, "companies": 50},
        {"name": "NIFTY Midcap 150", "key": "NIFTYMIDCAP150", "market_cap": 4411308, "avg_pe": 24.81, "expected_growth": 15.57, "companies": 150},
        {"name": "NIFTY Small Cap 250", "key": "NIFTYSMALLCAP250", "market_cap": 147965, "avg_pe": 25.13, "expected_growth": 20.25, "companies": 250}
    ],

    dcf_scenarios: [
        {"company": "HDFCBANK", "bear_case": 2100, "base_case": 2848, "bull_case": 3600, "current_price": 2848},
        {"company": "TCS", "bear_case": 2800, "base_case": 3200, "bull_case": 3800, "current_price": 3200},
        {"company": "RELIANCE", "bear_case": 2200, "base_case": 2800, "bull_case": 3500, "current_price": 2800},
        {"company": "INFY", "bear_case": 1200, "base_case": 1450, "bull_case": 1700, "current_price": 1450}
    ],

    risk_factors: [
        {"factor": "Market Volatility", "impact": 4.2, "probability": 0.8, "trend": "Increasing"},
        {"factor": "Interest Rate Risk", "impact": 3.8, "probability": 0.7, "trend": "Stable"},
        {"factor": "Currency Risk", "impact": 3.5, "probability": 0.6, "trend": "Increasing"},
        {"factor": "Regulatory Changes", "impact": 3.2, "probability": 0.5, "trend": "Stable"},
        {"factor": "Geopolitical Risk", "impact": 4.0, "probability": 0.6, "trend": "Increasing"},
        {"factor": "Inflation Risk", "impact": 3.5, "probability": 0.7, "trend": "Stable"}
    ]
};

// Utility Functions
const Utils = {
    formatCurrency: (amount, currency = '₹') => {
        if (typeof amount !== 'number' || isNaN(amount)) return 'N/A';
        return `${currency}${amount.toLocaleString('en-IN', {maximumFractionDigits: 2})}`;
    },

    formatPercent: (value) => {
        if (typeof value !== 'number' || isNaN(value)) return 'N/A';
        return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
    },

    formatLargeNumber: (num) => {
        if (num >= 10000000) return (num / 10000000).toFixed(1) + ' Cr';
        if (num >= 100000) return (num / 100000).toFixed(1) + ' L';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    },

    getMarketCapCategory: (mcap) => {
        if (mcap >= 200000) return 'Large Cap';
        if (mcap >= 50000) return 'Mid Cap';
        return 'Small Cap';
    },

    getRiskColor: (risk) => {
        const colors = { 'Low': '#22c55e', 'Medium': '#f59e0b', 'High': '#ef4444' };
        return colors[risk] || '#6b7280';
    },

    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    getThemeColors: () => {
        const isDark = document.documentElement.getAttribute('data-color-scheme') === 'dark';
        return {
            primary: isDark ? '#32b8c6' : '#21808d',
            text: isDark ? '#f5f5f5' : '#1f2121',
            background: isDark ? '#1f2121' : '#fcfcf9',
            surface: isDark ? '#262828' : '#ffffff',
            grid: isDark ? 'rgba(245, 245, 245, 0.1)' : 'rgba(31, 33, 33, 0.1)',
            success: isDark ? '#32b8c6' : '#21808d',
            error: isDark ? '#ff5459' : '#c0152f',
            warning: isDark ? '#e66061' : '#a84b2f'
        };
    }
};

// Application Initialization
class NIFTY500App {
    constructor() {
        this.init();
    }

    init() {
        console.log('🚀 Initializing NIFTY500 Multi-Sector Platform...');
        
        try {
            this.setupEventListeners();
            this.initializeTheme();
            this.populateInitialData();
            this.setupInteractiveElements();
            
            setTimeout(() => {
                this.initializeCharts();
                console.log('✅ Platform initialized successfully');
            }, 100);
        } catch (error) {
            console.error('❌ Error during initialization:', error);
        }
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());

        // Export functionality
        document.getElementById('exportBtn')?.addEventListener('click', () => this.exportData());

        // Search functionality
        document.getElementById('stockSearch')?.addEventListener('input', 
            Utils.debounce((e) => this.handleStockSearch(e), 300));

        // Filters
        ['mcapFilter', 'sectorFilter', 'riskFilter'].forEach(filterId => {
            document.getElementById(filterId)?.addEventListener('change', () => this.applyFilters());
        });

        // Sector selection
        document.getElementById('sectorSelect')?.addEventListener('change', (e) => {
            this.handleSectorChange(e.target.value);
        });

        // Interactive elements
        this.setupInteractiveCards();
    }

    setupInteractiveCards() {
        // Index cards
        document.querySelectorAll('.index-card').forEach(card => {
            card.addEventListener('click', (e) => {
                document.querySelectorAll('.index-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                AppState.selectedIndex = card.getAttribute('data-index');
                this.updateDashboardData();
            });
        });

        // Sector cards
        document.querySelectorAll('.sector-card').forEach(card => {
            card.addEventListener('click', (e) => {
                document.querySelectorAll('.sector-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                AppState.selectedSector = card.getAttribute('data-sector');
                this.updateSectorData();
            });
        });
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-color-scheme', savedTheme);
        AppState.theme = savedTheme;
    }

    toggleTheme() {
        const newTheme = AppState.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('theme', newTheme);
        AppState.theme = newTheme;
        
        // Recreate charts with new theme
        setTimeout(() => {
            Object.keys(AppState.charts).forEach(chartId => {
                if (AppState.charts[chartId]) {
                    AppState.charts[chartId].destroy();
                    delete AppState.charts[chartId];
                }
            });
            this.initializeCharts();
        }, 100);
    }

    handleNavigation(event) {
        const targetSection = event.target.getAttribute('data-section');
        if (!targetSection) return;

        // Update active nav button
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // Update active section
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active', 'fade-in');
        });

        const targetSectionElement = document.getElementById(targetSection);
        if (targetSectionElement) {
            targetSectionElement.classList.add('active', 'fade-in');
            AppState.currentSection = targetSection;
            
            // Initialize section-specific charts
            setTimeout(() => this.initializeSectionCharts(targetSection), 100);
        }
    }

    populateInitialData() {
        this.populateStockSearch();
        this.populateSectorFilter();
        this.populateStocksGrid();
        this.populateCompanySelector();
    }

    populateStockSearch() {
        const searchInput = document.getElementById('stockSearch');
        if (!searchInput) return;

        searchInput.setAttribute('placeholder', 
            `Search from ${DataStore.companies.length} stocks in NIFTY500...`);
    }

    handleStockSearch(event) {
        const query = event.target.value.toLowerCase();
        const resultsContainer = document.getElementById('searchResults');
        
        if (!resultsContainer) return;
        
        if (query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }

        const filteredStocks = DataStore.companies.filter(company =>
            company.name.toLowerCase().includes(query) ||
            company.ticker.toLowerCase().includes(query)
        ).slice(0, 10);

        if (filteredStocks.length === 0) {
            resultsContainer.innerHTML = '<div class="search-result-item">No stocks found</div>';
        } else {
            resultsContainer.innerHTML = filteredStocks.map(stock => `
                <div class="search-result-item" data-ticker="${stock.ticker}">
                    <strong>${stock.name}</strong> (${stock.ticker})
                    <br><small>${stock.sector} | ${Utils.formatCurrency(stock.current_price)}</small>
                </div>
            `).join('');

            // Add click handlers
            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const ticker = item.getAttribute('data-ticker');
                    this.selectStock(ticker);
                    resultsContainer.style.display = 'none';
                    event.target.value = '';
                });
            });
        }

        resultsContainer.style.display = 'block';
    }

    selectStock(ticker) {
        const stock = DataStore.companies.find(c => c.ticker === ticker);
        if (stock) {
            this.showStockDetails(stock);
        }
    }

    showStockDetails(stock) {
        // Navigate to stock selection section and highlight the stock
        this.navigateToSection('stock-selection');
        setTimeout(() => {
            this.highlightStock(stock.ticker);
        }, 300);
    }

    populateSectorFilter() {
        const sectorFilter = document.getElementById('sectorFilter');
        if (!sectorFilter) return;

        const sectors = [...new Set(DataStore.companies.map(c => c.sector))].sort();
        sectorFilter.innerHTML = '<option value="all">All Sectors</option>' +
            sectors.map(sector => `<option value="${sector}">${sector}</option>`).join('');
    }

    populateStocksGrid() {
        const stocksGrid = document.getElementById('stocksGrid');
        if (!stocksGrid) return;

        let filteredCompanies = this.getFilteredCompanies();
        
        stocksGrid.innerHTML = filteredCompanies.map(company => `
            <div class="stock-card" data-ticker="${company.ticker}">
                <div class="stock-header">
                    <div>
                        <div class="stock-name">${company.name}</div>
                        <div class="stock-ticker">${company.ticker}</div>
                    </div>
                    <div class="stock-price">${Utils.formatCurrency(company.current_price)}</div>
                </div>
                
                <div class="stock-metrics">
                    <div class="metric-item">
                        <div class="metric-label">Market Cap</div>
                        <div class="metric-value">${Utils.formatLargeNumber(company.market_cap)}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">FY26 PE</div>
                        <div class="metric-value">${company.fy26_pe.toFixed(1)}x</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">FY26 ROE</div>
                        <div class="metric-value">${company.fy26_roe.toFixed(1)}%</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">EPS Growth</div>
                        <div class="metric-value">${Utils.formatPercent(company.fy26_eps_growth)}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">Revenue Growth</div>
                        <div class="metric-value">${Utils.formatPercent(company.fy26_revenue_growth)}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">Risk Rating</div>
                        <div class="metric-value" style="color: ${Utils.getRiskColor(company.risk_rating)}">${company.risk_rating}</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">ESG Score</div>
                        <div class="metric-value">${company.esg_score}/100</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-label">Beta</div>
                        <div class="metric-value">${company.beta.toFixed(1)}</div>
                    </div>
                </div>

                <div class="financial-ratios">
                    <h4>📊 Key Financial Ratios (FY26 Forward)</h4>
                    <div class="ratios-grid">
                        <div class="ratio-category">
                            <h5>Profitability Ratios</h5>
                            <div class="ratio-item">
                                <span>Gross Margin:</span>
                                <span>${company.gross_margin?.toFixed(1) || 'N/A'}%</span>
                            </div>
                            <div class="ratio-item">
                                <span>Operating Margin:</span>
                                <span>${company.operating_margin?.toFixed(1) || 'N/A'}%</span>
                            </div>
                            <div class="ratio-item">
                                <span>EBITDA Margin:</span>
                                <span>${company.ebitda_margin?.toFixed(1) || 'N/A'}%</span>
                            </div>
                            <div class="ratio-item">
                                <span>Net Margin:</span>
                                <span>${company.net_margin?.toFixed(1) || 'N/A'}%</span>
                            </div>
                            <div class="ratio-item">
                                <span>ROE:</span>
                                <span>${company.fy26_roe?.toFixed(1)}%</span>
                            </div>
                        </div>
                        
                        <div class="ratio-category">
                            <h5>Valuation Ratios</h5>
                            <div class="ratio-item">
                                <span>P/E Ratio:</span>
                                <span>${company.fy26_pe?.toFixed(1)}x</span>
                            </div>
                            <div class="ratio-item">
                                <span>P/B Ratio:</span>
                                <span>${company.price_book?.toFixed(1) || 'N/A'}x</span>
                            </div>
                            <div class="ratio-item">
                                <span>EV/EBITDA:</span>
                                <span>${company.ev_ebitda?.toFixed(1) || 'N/A'}x</span>
                            </div>
                            <div class="ratio-item">
                                <span>Dividend Yield:</span>
                                <span>${company.dividend_yield?.toFixed(1) || 'N/A'}%</span>
                            </div>
                        </div>

                        <div class="ratio-category">
                            <h5>Liquidity & Efficiency</h5>
                            <div class="ratio-item">
                                <span>Current Ratio:</span>
                                <span>${company.current_ratio?.toFixed(1) || 'N/A'}x</span>
                            </div>
                            <div class="ratio-item">
                                <span>Debt/Equity:</span>
                                <span>${company.debt_equity?.toFixed(1) || 'N/A'}x</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click handlers for stock cards
        stocksGrid.querySelectorAll('.stock-card').forEach(card => {
            card.addEventListener('click', () => {
                const ticker = card.getAttribute('data-ticker');
                this.highlightStock(ticker);
            });
        });
    }

    populateCompanySelector() {
        const selector = document.getElementById('companySelector');
        if (!selector) return;

        selector.innerHTML = DataStore.companies.map(company => `
            <label class="company-checkbox">
                <input type="checkbox" value="${company.ticker}">
                <span>${company.name}</span>
            </label>
        `).join('');

        // Add change handlers
        selector.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updatePeerComparison());
        });
    }

    getFilteredCompanies() {
        let filtered = [...DataStore.companies];

        if (AppState.filters.mcap !== 'all') {
            filtered = filtered.filter(company => {
                const category = Utils.getMarketCapCategory(company.market_cap);
                return category.toLowerCase().includes(AppState.filters.mcap);
            });
        }

        if (AppState.filters.sector !== 'all') {
            filtered = filtered.filter(company => company.sector === AppState.filters.sector);
        }

        if (AppState.filters.risk !== 'all') {
            filtered = filtered.filter(company => company.risk_rating === AppState.filters.risk);
        }

        // Sort by market cap by default
        return filtered.sort((a, b) => b.market_cap - a.market_cap);
    }

    applyFilters() {
        AppState.filters.mcap = document.getElementById('mcapFilter')?.value || 'all';
        AppState.filters.sector = document.getElementById('sectorFilter')?.value || 'all';
        AppState.filters.risk = document.getElementById('riskFilter')?.value || 'all';

        this.populateStocksGrid();
        this.updateCharts();
    }

    highlightStock(ticker) {
        document.querySelectorAll('.stock-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        const targetCard = document.querySelector(`[data-ticker="${ticker}"]`);
        if (targetCard) {
            targetCard.classList.add('selected');
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    handleSectorChange(sector) {
        AppState.selectedSector = sector;
        this.updateSectorDetails();
    }

    updateSectorDetails() {
        const detailsPanel = document.getElementById('sectorDetailsPanel');
        if (!detailsPanel) return;

        if (AppState.selectedSector === 'all') {
            detailsPanel.innerHTML = this.generateAllSectorsOverview();
        } else {
            detailsPanel.innerHTML = this.generateSectorSpecificAnalysis(AppState.selectedSector);
        }
    }

    generateAllSectorsOverview() {
        return `
            <div class="all-sectors-overview">
                <h3>📊 All Sectors Overview - NIFTY500 Universe</h3>
                <div class="sectors-summary-grid">
                    ${DataStore.sectors.map(sector => `
                        <div class="sector-summary-card">
                            <div class="sector-header">
                                <span class="sector-icon">${sector.icon}</span>
                                <h4>${sector.name}</h4>
                            </div>
                            <div class="sector-metrics">
                                <div class="metric">
                                    <label>Weightage:</label>
                                    <value>${sector.weightage}%</value>
                                </div>
                                <div class="metric">
                                    <label>Companies:</label>
                                    <value>${sector.companies_count}</value>
                                </div>
                                <div class="metric">
                                    <label>Avg PE:</label>
                                    <value>${sector.avg_pe}x</value>
                                </div>
                                <div class="metric">
                                    <label>Expected Growth:</label>
                                    <value>${sector.avg_growth}%</value>
                                </div>
                                <div class="metric">
                                    <label>Risk Level:</label>
                                    <value style="color: ${Utils.getRiskColor(sector.risk_level)}">${sector.risk_level}</value>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="comprehensive-charts">
                    <h4>📈 20+ Advanced Visualizations</h4>
                    <div class="charts-showcase">
                        <div class="chart-item">
                            <h5>1. Profitability Margins Analysis</h5>
                            <div class="chart-container" style="position: relative; height: 300px;">
                                <canvas id="profitabilityChart"></canvas>
                            </div>
                        </div>
                        
                        <div class="chart-item">
                            <h5>2. Risk-Return Bubble Chart</h5>
                            <div class="chart-container" style="position: relative; height: 300px;">
                                <canvas id="riskReturnChart"></canvas>
                            </div>
                        </div>
                        
                        <div class="chart-item">
                            <h5>3. Market Cap Distribution</h5>
                            <div class="chart-container" style="position: relative; height: 300px;">
                                <canvas id="mcapDistChart"></canvas>
                            </div>
                        </div>
                        
                        <div class="chart-item">
                            <h5>4. Beta Coefficient Analysis</h5>
                            <div class="chart-container" style="position: relative; height: 300px;">
                                <canvas id="betaAnalysisChart"></canvas>
                            </div>
                        </div>
                        
                        <div class="chart-item">
                            <h5>5. Dividend Yield Comparison</h5>
                            <div class="chart-container" style="position: relative; height: 300px;">
                                <canvas id="dividendYieldChart"></canvas>
                            </div>
                        </div>
                        
                        <div class="chart-item">
                            <h5>6. ESG Scores Distribution</h5>
                            <div class="chart-container" style="position: relative; height: 300px;">
                                <canvas id="esgDistributionChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateSectorSpecificAnalysis(sectorName) {
        const sectorCompanies = DataStore.companies.filter(c => c.sector === sectorName);
        const sectorInfo = DataStore.sectors.find(s => s.name === sectorName);
        
        return `
            <div class="sector-specific-analysis">
                <div class="sector-header">
                    <h3>${sectorInfo.icon} ${sectorName} Sector Deep Analysis</h3>
                    <div class="sector-key-metrics">
                        <div class="key-metric">
                            <label>Market Weightage</label>
                            <value>${sectorInfo.weightage}%</value>
                        </div>
                        <div class="key-metric">
                            <label>Companies Count</label>
                            <value>${sectorCompanies.length}</value>
                        </div>
                        <div class="key-metric">
                            <label>Total Market Cap</label>
                            <value>${Utils.formatLargeNumber(sectorCompanies.reduce((sum, c) => sum + c.market_cap, 0))}</value>
                        </div>
                    </div>
                </div>
                
                <div class="sector-companies-table">
                    <h4>📋 Sector Companies Analysis</h4>
                    <div class="table-container">
                        <table class="sector-table">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Market Cap</th>
                                    <th>Current Price</th>
                                    <th>FY26 PE</th>
                                    <th>FY26 ROE</th>
                                    <th>EPS Growth</th>
                                    <th>Risk Rating</th>
                                    <th>ESG Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${sectorCompanies.map(company => `
                                    <tr>
                                        <td><strong>${company.name}</strong><br><small>${company.ticker}</small></td>
                                        <td>${Utils.formatLargeNumber(company.market_cap)}</td>
                                        <td>${Utils.formatCurrency(company.current_price)}</td>
                                        <td>${company.fy26_pe.toFixed(1)}x</td>
                                        <td>${company.fy26_roe.toFixed(1)}%</td>
                                        <td class="${company.fy26_eps_growth > 0 ? 'positive' : 'negative'}">${Utils.formatPercent(company.fy26_eps_growth)}</td>
                                        <td><span style="color: ${Utils.getRiskColor(company.risk_rating)}">${company.risk_rating}</span></td>
                                        <td>${company.esg_score}/100</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="sector-charts-grid">
                    <div class="sector-chart">
                        <h5>📊 Sector Valuation Analysis</h5>
                        <div class="chart-container" style="position: relative; height: 350px;">
                            <canvas id="sectorValuationChart"></canvas>
                        </div>
                    </div>
                    
                    <div class="sector-chart">
                        <h5>📈 Growth vs Risk Matrix</h5>
                        <div class="chart-container" style="position: relative; height: 350px;">
                            <canvas id="sectorGrowthRiskChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    updatePeerComparison() {
        const selectedCompanies = Array.from(document.querySelectorAll('#companySelector input:checked'))
            .map(input => input.value);
        
        this.generatePeerComparisonTable(selectedCompanies);
    }

    generatePeerComparisonTable(tickers) {
        const table = document.getElementById('peerComparisonTable');
        if (!table) return;

        const companies = DataStore.companies.filter(c => tickers.includes(c.ticker));
        
        if (companies.length === 0) {
            table.innerHTML = '<p>Select companies to compare</p>';
            return;
        }

        table.innerHTML = `
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Market Cap</th>
                    <th>FY26 PE</th>
                    <th>FY26 PB</th>
                    <th>FY26 ROE</th>
                    <th>EPS Growth</th>
                    <th>Revenue Growth</th>
                    <th>Risk Rating</th>
                    <th>ESG Score</th>
                    <th>Beta</th>
                </tr>
            </thead>
            <tbody>
                ${companies.map(company => `
                    <tr>
                        <td><strong>${company.name}</strong><br><small>${company.ticker}</small></td>
                        <td>${Utils.formatLargeNumber(company.market_cap)}</td>
                        <td>${company.fy26_pe.toFixed(1)}x</td>
                        <td>${company.price_book?.toFixed(1) || 'N/A'}x</td>
                        <td>${company.fy26_roe.toFixed(1)}%</td>
                        <td class="${company.fy26_eps_growth > 0 ? 'positive' : 'negative'}">${Utils.formatPercent(company.fy26_eps_growth)}</td>
                        <td class="${company.fy26_revenue_growth > 0 ? 'positive' : 'negative'}">${Utils.formatPercent(company.fy26_revenue_growth)}</td>
                        <td><span style="color: ${Utils.getRiskColor(company.risk_rating)}">${company.risk_rating}</span></td>
                        <td>${company.esg_score}/100</td>
                        <td>${company.beta.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    exportData() {
        try {
            const exportData = {
                report_date: new Date().toISOString().split('T')[0],
                analyst: "Research Scientist - Survesh Bajpai",
                email: "Surveshb2@gmail.com",
                universe: "NIFTY500",
                total_companies: DataStore.companies.length,
                sectors_analyzed: DataStore.sectors.length,
                companies: DataStore.companies,
                sectors: DataStore.sectors,
                indices: DataStore.indices,
                dcf_scenarios: DataStore.dcf_scenarios,
                risk_factors: DataStore.risk_factors,
                current_filters: AppState.filters,
                selected_sector: AppState.selectedSector,
                selected_index: AppState.selectedIndex,
                market_summary: {
                    total_market_cap: DataStore.companies.reduce((sum, c) => sum + c.market_cap, 0),
                    avg_pe: DataStore.companies.reduce((sum, c) => sum + c.fy26_pe, 0) / DataStore.companies.length,
                    avg_roe: DataStore.companies.reduce((sum, c) => sum + c.fy26_roe, 0) / DataStore.companies.length,
                    avg_growth: DataStore.companies.reduce((sum, c) => sum + c.fy26_eps_growth, 0) / DataStore.companies.length
                }
            };

            const dataStr = JSON.stringify(exportData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const fileName = `NIFTY500_Multi_Sector_Analysis_${new Date().toISOString().split('T')[0]}.json`;
            
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            URL.revokeObjectURL(url);
            
            this.showNotification('📊 Report exported successfully!', 'success');
        } catch (error) {
            console.error('Export failed:', error);
            this.showNotification('❌ Export failed. Please try again.', 'error');
        }
    }

    showNotification(message, type = 'info') {
        // Create and show a notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
            background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'};
        `;

        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    navigateToSection(sectionId) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.getAttribute('data-section') === sectionId) {
                btn.click();
            }
        });
    }

    // Chart Initialization Methods
    initializeCharts() {
        if (AppState.currentSection === 'dashboard') {
            this.initializeDashboardCharts();
        }
    }

    initializeSectionCharts(sectionId) {
        switch (sectionId) {
            case 'dashboard':
                this.initializeDashboardCharts();
                break;
            case 'dcf-valuation':
                this.initializeDCFCharts();
                break;
            case 'risk-analysis':
                this.initializeRiskCharts();
                break;
            case 'peer-comparison':
                this.initializePeerCharts();
                break;
            case 'forecasts':
                this.initializeForecastCharts();
                break;
        }
    }

    initializeDashboardCharts() {
        const colors = Utils.getThemeColors();
        
        // Interactive Chart based on selected tab
        this.createInteractiveChart('profitability', colors);
        
        // Setup chart tab functionality
        document.querySelectorAll('.chart-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                
                const chartType = e.target.getAttribute('data-chart');
                this.createInteractiveChart(chartType, colors);
            });
        });
    }

    createInteractiveChart(type, colors) {
        const ctx = document.getElementById('interactiveChart');
        if (!ctx) return;

        // Destroy existing chart
        if (AppState.charts.interactiveChart) {
            AppState.charts.interactiveChart.destroy();
        }

        let chartConfig;

        switch (type) {
            case 'profitability':
                chartConfig = this.getProfitabilityChartConfig(colors);
                break;
            case 'risk-return':
                chartConfig = this.getRiskReturnChartConfig(colors);
                break;
            case 'momentum':
                chartConfig = this.getMomentumChartConfig(colors);
                break;
            case 'correlation':
                chartConfig = this.getCorrelationChartConfig(colors);
                break;
            case 'esg':
                chartConfig = this.getESGChartConfig(colors);
                break;
            default:
                chartConfig = this.getProfitabilityChartConfig(colors);
        }

        AppState.charts.interactiveChart = new Chart(ctx, chartConfig);
    }

    getProfitabilityChartConfig(colors) {
        const sectors = DataStore.sectors;
        
        return {
            type: 'bar',
            data: {
                labels: sectors.map(s => s.name),
                datasets: [{
                    label: 'Average ROE (%)',
                    data: sectors.map(() => Math.random() * 30 + 10), // Mock data
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Sector-wise Profitability Analysis', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'ROE (%)', color: colors.text }
                    }
                }
            }
        };
    }

    getRiskReturnChartConfig(colors) {
        return {
            type: 'scatter',
            data: {
                datasets: DataStore.sectors.map((sector, index) => ({
                    label: sector.name,
                    data: DataStore.companies
                        .filter(c => c.sector === sector.name)
                        .map(c => ({
                            x: c.beta || Math.random() * 1.5 + 0.5,
                            y: c.fy26_roe
                        })),
                    backgroundColor: `hsl(${index * 360 / DataStore.sectors.length}, 70%, 50%)`,
                    borderColor: `hsl(${index * 360 / DataStore.sectors.length}, 70%, 40%)`,
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Risk vs Return Analysis', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { 
                        title: { display: true, text: 'Risk (Beta)', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    },
                    y: { 
                        title: { display: true, text: 'Return (ROE %)', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    }
                }
            }
        };
    }

    getMomentumChartConfig(colors) {
        return {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: DataStore.sectors.slice(0, 5).map((sector, index) => ({
                    label: sector.name,
                    data: Array.from({length: 6}, () => Math.random() * 20 - 10),
                    borderColor: `hsl(${index * 360 / 5}, 70%, 50%)`,
                    backgroundColor: `hsla(${index * 360 / 5}, 70%, 50%, 0.1)`,
                    tension: 0.4
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Price Momentum Analysis (YTD %)', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Returns (%)', color: colors.text }
                    }
                }
            }
        };
    }

    getCorrelationChartConfig(colors) {
        return {
            type: 'bar',
            data: {
                labels: DataStore.sectors.map(s => s.name),
                datasets: [{
                    label: 'Correlation with NIFTY',
                    data: DataStore.sectors.map(() => Math.random() * 0.6 + 0.4),
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Sector Correlation with NIFTY', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        min: 0,
                        max: 1,
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Correlation Coefficient', color: colors.text }
                    }
                }
            }
        };
    }

    getESGChartConfig(colors) {
        return {
            type: 'doughnut',
            data: {
                labels: ['High ESG (>80)', 'Medium ESG (60-80)', 'Low ESG (<60)'],
                datasets: [{
                    data: [
                        DataStore.companies.filter(c => c.esg_score > 80).length,
                        DataStore.companies.filter(c => c.esg_score >= 60 && c.esg_score <= 80).length,
                        DataStore.companies.filter(c => c.esg_score < 60).length
                    ],
                    backgroundColor: [colors.success, '#f59e0b', colors.error],
                    borderColor: colors.surface,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'ESG Scores Distribution', color: colors.text },
                    legend: { labels: { color: colors.text } }
                }
            }
        };
    }

    initializeDCFCharts() {
        const colors = Utils.getThemeColors();
        
        this.createDCFScenarioChart(colors);
        this.createFCFChart(colors);
        this.createTerminalValueChart(colors);
        this.createEVBridgeChart(colors);
    }

    createDCFScenarioChart(colors) {
        const ctx = document.getElementById('dcfScenarioChart');
        if (!ctx || AppState.charts.dcfScenarioChart) return;

        const scenarios = DataStore.dcf_scenarios;
        
        AppState.charts.dcfScenarioChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: scenarios.map(s => s.company),
                datasets: [
                    {
                        label: 'Bear Case',
                        data: scenarios.map(s => s.bear_case),
                        backgroundColor: colors.error,
                        borderColor: colors.error,
                        borderWidth: 1
                    },
                    {
                        label: 'Base Case',
                        data: scenarios.map(s => s.base_case),
                        backgroundColor: colors.primary,
                        borderColor: colors.primary,
                        borderWidth: 1
                    },
                    {
                        label: 'Bull Case',
                        data: scenarios.map(s => s.bull_case),
                        backgroundColor: colors.success,
                        borderColor: colors.success,
                        borderWidth: 1
                    },
                    {
                        label: 'Current Price',
                        data: scenarios.map(s => s.current_price),
                        type: 'line',
                        borderColor: colors.warning,
                        backgroundColor: 'transparent',
                        borderWidth: 3,
                        pointBackgroundColor: colors.warning,
                        pointBorderColor: colors.warning,
                        pointRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'DCF Scenario Analysis - Bull/Base/Bear Cases', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Price (₹)', color: colors.text }
                    }
                }
            }
        });
    }

    createFCFChart(colors) {
        const ctx = document.getElementById('fcfForecastChart');
        if (!ctx || AppState.charts.fcfForecastChart) return;

        AppState.charts.fcfForecastChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['FY24', 'FY25', 'FY26', 'FY27', 'FY28', 'FY29'],
                datasets: DataStore.dcf_scenarios.map((scenario, index) => ({
                    label: scenario.company,
                    data: Array.from({length: 6}, (_, i) => Math.random() * 5000 + 1000 * (i + 1)),
                    borderColor: `hsl(${index * 360 / DataStore.dcf_scenarios.length}, 70%, 50%)`,
                    backgroundColor: `hsla(${index * 360 / DataStore.dcf_scenarios.length}, 70%, 50%, 0.1)`,
                    tension: 0.4,
                    fill: true
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Free Cash Flow Projections (5-Year)', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'FCF (₹ Cr)', color: colors.text }
                    }
                }
            }
        });
    }

    createTerminalValueChart(colors) {
        const ctx = document.getElementById('terminalValueChart');
        if (!ctx || AppState.charts.terminalValueChart) return;

        AppState.charts.terminalValueChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['PV of Explicit FCF', 'Terminal Value'],
                datasets: [{
                    data: [40, 60], // Typical DCF composition
                    backgroundColor: [colors.primary, colors.success],
                    borderColor: colors.surface,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Enterprise Value Composition', color: colors.text },
                    legend: { labels: { color: colors.text } }
                }
            }
        });
    }

    createEVBridgeChart(colors) {
        const ctx = document.getElementById('evBridgeChart');
        if (!ctx || AppState.charts.evBridgeChart) return;

        AppState.charts.evBridgeChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Enterprise Value', 'Less: Net Debt', 'Add: Investments', 'Equity Value'],
                datasets: [{
                    data: [10000, -500, 200, 9700],
                    backgroundColor: [
                        colors.primary,
                        colors.error,
                        colors.success,
                        colors.primary
                    ],
                    borderColor: colors.text,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Enterprise Value to Equity Value Bridge', color: colors.text },
                    legend: { display: false }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Value (₹ Cr)', color: colors.text }
                    }
                }
            }
        });
    }

    initializeRiskCharts() {
        const colors = Utils.getThemeColors();
        
        this.createRiskRadarChart(colors);
        this.createRiskHeatmapChart(colors);
        this.createVaRChart(colors);
        this.createESGRiskChart(colors);
    }

    createRiskRadarChart(colors) {
        const ctx = document.getElementById('riskRadarChart');
        if (!ctx || AppState.charts.riskRadarChart) return;

        AppState.charts.riskRadarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: DataStore.risk_factors.map(r => r.factor),
                datasets: [{
                    label: 'Risk Impact',
                    data: DataStore.risk_factors.map(r => r.impact),
                    backgroundColor: `${colors.error}33`,
                    borderColor: colors.error,
                    borderWidth: 2,
                    pointBackgroundColor: colors.error,
                    pointBorderColor: colors.surface,
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Multi-Dimensional Risk Assessment', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    r: {
                        min: 0,
                        max: 5,
                        ticks: { color: colors.text },
                        grid: { color: colors.grid },
                        pointLabels: { color: colors.text }
                    }
                }
            }
        });
    }

    createRiskHeatmapChart(colors) {
        const ctx = document.getElementById('riskHeatmapChart');
        if (!ctx || AppState.charts.riskHeatmapChart) return;

        AppState.charts.riskHeatmapChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: DataStore.sectors.map(s => s.name),
                datasets: [{
                    label: 'Risk Score',
                    data: DataStore.sectors.map(s => {
                        const riskMap = { 'Low': 2, 'Medium': 3.5, 'High': 4.5 };
                        return riskMap[s.risk_level];
                    }),
                    backgroundColor: DataStore.sectors.map(s => {
                        const colorMap = { 'Low': colors.success, 'Medium': colors.warning, 'High': colors.error };
                        return colorMap[s.risk_level];
                    }),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Sector Risk Intensity Heatmap', color: colors.text },
                    legend: { display: false }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        min: 0,
                        max: 5,
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Risk Score (1-5)', color: colors.text }
                    }
                }
            }
        });
    }

    createVaRChart(colors) {
        const ctx = document.getElementById('varChart');
        if (!ctx || AppState.charts.varChart) return;

        AppState.charts.varChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1 Day', '1 Week', '1 Month', '3 Months', '1 Year'],
                datasets: [{
                    label: '95% VaR',
                    data: [1.2, 3.8, 8.5, 15.2, 28.5],
                    borderColor: colors.error,
                    backgroundColor: `${colors.error}33`,
                    fill: true,
                    tension: 0.4
                }, {
                    label: '99% VaR',
                    data: [1.8, 5.2, 12.1, 22.8, 38.5],
                    borderColor: colors.warning,
                    backgroundColor: `${colors.warning}33`,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Value at Risk (VaR) Analysis', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Potential Loss (%)', color: colors.text }
                    }
                }
            }
        });
    }

    createESGRiskChart(colors) {
        const ctx = document.getElementById('esgChart');
        if (!ctx || AppState.charts.esgChart) return;

        AppState.charts.esgChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'ESG vs Returns',
                    data: DataStore.companies.map(c => ({
                        x: c.esg_score,
                        y: c.fy26_roe
                    })),
                    backgroundColor: colors.success,
                    borderColor: colors.success,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'ESG Score vs Financial Performance', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { 
                        min: 50,
                        max: 100,
                        title: { display: true, text: 'ESG Score', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    },
                    y: { 
                        title: { display: true, text: 'ROE (%)', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    }
                }
            }
        });
    }

    initializePeerCharts() {
        const colors = Utils.getThemeColors();
        
        this.createPeerRankingChart(colors);
        this.createValuationComparisonChart(colors);
    }

    createPeerRankingChart(colors) {
        const ctx = document.getElementById('peerRankingChart');
        if (!ctx || AppState.charts.peerRankingChart) return;

        const topCompanies = DataStore.companies
            .sort((a, b) => b.market_cap - a.market_cap)
            .slice(0, 10);

        AppState.charts.peerRankingChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: topCompanies.map(c => c.ticker),
                datasets: [{
                    label: 'Market Cap Ranking',
                    data: topCompanies.map(c => c.market_cap),
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    title: { display: true, text: 'Top 10 Companies by Market Cap', color: colors.text },
                    legend: { display: false }
                },
                scales: {
                    x: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Market Cap (₹ Cr)', color: colors.text }
                    },
                    y: { ticks: { color: colors.text }, grid: { color: colors.grid } }
                }
            }
        });
    }

    createValuationComparisonChart(colors) {
        const ctx = document.getElementById('valuationComparisonChart');
        if (!ctx || AppState.charts.valuationComparisonChart) return;

        const sampleCompanies = DataStore.companies.slice(0, 8);

        AppState.charts.valuationComparisonChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sampleCompanies.map(c => c.ticker),
                datasets: [
                    {
                        label: 'P/E Ratio',
                        data: sampleCompanies.map(c => c.fy26_pe),
                        backgroundColor: colors.primary,
                        yAxisID: 'y'
                    },
                    {
                        label: 'P/B Ratio',
                        data: sampleCompanies.map(c => c.price_book || Math.random() * 5 + 1),
                        backgroundColor: colors.success,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Valuation Multiples Comparison', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { display: true, text: 'P/E Ratio', color: colors.text },
                        ticks: { color: colors.text },
                        grid: { color: colors.grid }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { display: true, text: 'P/B Ratio', color: colors.text },
                        ticks: { color: colors.text },
                        grid: { drawOnChartArea: false, color: colors.grid }
                    }
                }
            }
        });
    }

    initializeForecastCharts() {
        const colors = Utils.getThemeColors();
        
        this.createRevenueProjectionChart(colors);
        this.createEBITDAEvolutionChart(colors);
        this.createEPSGrowthChart(colors);
        this.createReturnMetricsChart(colors);
    }

    createRevenueProjectionChart(colors) {
        const ctx = document.getElementById('revenueProjectionChart');
        if (!ctx || AppState.charts.revenueProjectionChart) return;

        AppState.charts.revenueProjectionChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['FY25', 'FY26', 'FY27', 'FY28', 'FY29'],
                datasets: DataStore.sectors.slice(0, 5).map((sector, index) => ({
                    label: sector.name,
                    data: Array.from({length: 5}, (_, i) => Math.random() * 20000 + 5000 * (i + 1)),
                    borderColor: `hsl(${index * 360 / 5}, 70%, 50%)`,
                    backgroundColor: `hsla(${index * 360 / 5}, 70%, 50%, 0.1)`,
                    tension: 0.4,
                    fill: false
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: '5-Year Revenue Projections by Sector', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Revenue (₹ Cr)', color: colors.text }
                    }
                }
            }
        });
    }

    createEBITDAEvolutionChart(colors) {
        const ctx = document.getElementById('ebitdaEvolutionChart');
        if (!ctx || AppState.charts.ebitdaEvolutionChart) return;

        AppState.charts.ebitdaEvolutionChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['FY25', 'FY26', 'FY27', 'FY28', 'FY29'],
                datasets: [{
                    label: 'EBITDA Margin Evolution',
                    data: [18.5, 19.2, 20.1, 20.8, 21.5],
                    borderColor: colors.success,
                    backgroundColor: `${colors.success}33`,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'EBITDA Margin Evolution Forecast', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'EBITDA Margin (%)', color: colors.text }
                    }
                }
            }
        });
    }

    createEPSGrowthChart(colors) {
        const ctx = document.getElementById('epsGrowthChart');
        if (!ctx || AppState.charts.epsGrowthChart) return;

        AppState.charts.epsGrowthChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: DataStore.companies.slice(0, 10).map(c => c.ticker),
                datasets: [{
                    label: 'FY26 EPS Growth (%)',
                    data: DataStore.companies.slice(0, 10).map(c => c.fy26_eps_growth),
                    backgroundColor: DataStore.companies.slice(0, 10).map(c => 
                        c.fy26_eps_growth > 15 ? colors.success : 
                        c.fy26_eps_growth > 5 ? colors.primary : colors.warning
                    ),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'EPS Growth Projections (FY26)', color: colors.text },
                    legend: { display: false }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'EPS Growth (%)', color: colors.text }
                    }
                }
            }
        });
    }

    createReturnMetricsChart(colors) {
        const ctx = document.getElementById('returnMetricsChart');
        if (!ctx || AppState.charts.returnMetricsChart) return;

        AppState.charts.returnMetricsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['FY25', 'FY26', 'FY27', 'FY28', 'FY29'],
                datasets: [
                    {
                        label: 'Average ROE',
                        data: [22.5, 24.2, 25.8, 26.5, 27.2],
                        borderColor: colors.primary,
                        backgroundColor: 'transparent',
                        tension: 0.4
                    },
                    {
                        label: 'Average ROCE',
                        data: [18.2, 19.5, 21.1, 22.3, 23.8],
                        borderColor: colors.success,
                        backgroundColor: 'transparent',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Return Metrics Evolution (ROE vs ROCE)', color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { ticks: { color: colors.text }, grid: { color: colors.grid } },
                    y: { 
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid },
                        title: { display: true, text: 'Returns (%)', color: colors.text }
                    }
                }
            }
        });
    }

    updateCharts() {
        // Update charts when filters change
        const currentSection = AppState.currentSection;
        this.initializeSectionCharts(currentSection);
    }

    updateDashboardData() {
        // Update dashboard based on selected index
        if (AppState.selectedIndex) {
            const indexData = DataStore.indices.find(i => i.key === AppState.selectedIndex);
            if (indexData) {
                // Update summary metrics based on selected index
                this.updateSummaryCards(indexData);
            }
        }
    }

    updateSummaryCards(indexData) {
        // Update the summary cards with index-specific data
        const summaryCards = document.querySelectorAll('.summary-card');
        if (summaryCards.length >= 4) {
            // Update market cap card
            summaryCards[0].querySelector('.summary-value').textContent = 
                Utils.formatLargeNumber(indexData.market_cap * 100) + ' Cr';
            
            // Update companies count
            summaryCards[1].querySelector('.summary-value').textContent = indexData.companies.toString();
            summaryCards[1].querySelector('.summary-change').textContent = indexData.name;
            
            // Update growth
            summaryCards[2].querySelector('.summary-value').textContent = 
                Utils.formatPercent(indexData.expected_growth);
            
            // Update PE
            summaryCards[3].querySelector('.summary-value').textContent = indexData.avg_pe.toFixed(1) + 'x';
        }
    }

    updateSectorData() {
        // Update sector-specific visualizations
        this.updateSectorDetails();
        setTimeout(() => {
            this.createSectorSpecificCharts();
        }, 100);
    }

    createSectorSpecificCharts() {
        if (AppState.selectedSector === 'all') return;
        
        const colors = Utils.getThemeColors();
        
        // Create sector valuation chart
        this.createSectorValuationChart(colors);
        this.createSectorGrowthRiskChart(colors);
    }

    createSectorValuationChart(colors) {
        const ctx = document.getElementById('sectorValuationChart');
        if (!ctx) return;

        // Destroy existing chart
        if (AppState.charts.sectorValuationChart) {
            AppState.charts.sectorValuationChart.destroy();
        }

        const sectorCompanies = DataStore.companies.filter(c => c.sector === AppState.selectedSector);
        
        AppState.charts.sectorValuationChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: `${AppState.selectedSector} Companies`,
                    data: sectorCompanies.map(c => ({
                        x: c.fy26_pe,
                        y: c.fy26_roe,
                        r: Math.sqrt(c.market_cap) / 50 // Bubble size based on market cap
                    })),
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: `${AppState.selectedSector} - PE vs ROE Analysis`, color: colors.text },
                    legend: { labels: { color: colors.text } }
                },
                scales: {
                    x: { 
                        title: { display: true, text: 'FY26 PE Ratio', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    },
                    y: { 
                        title: { display: true, text: 'FY26 ROE (%)', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    }
                }
            }
        });
    }

    createSectorGrowthRiskChart(colors) {
        const ctx = document.getElementById('sectorGrowthRiskChart');
        if (!ctx) return;

        // Destroy existing chart
        if (AppState.charts.sectorGrowthRiskChart) {
            AppState.charts.sectorGrowthRiskChart.destroy();
        }

        const sectorCompanies = DataStore.companies.filter(c => c.sector === AppState.selectedSector);
        
        AppState.charts.sectorGrowthRiskChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Growth vs Risk',
                    data: sectorCompanies.map(c => ({
                        x: c.beta,
                        y: c.fy26_eps_growth
                    })),
                    backgroundColor: sectorCompanies.map(c => {
                        const riskColors = { 'Low': colors.success, 'Medium': colors.warning, 'High': colors.error };
                        return riskColors[c.risk_rating];
                    }),
                    borderColor: colors.text,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: `${AppState.selectedSector} - Growth vs Risk Matrix`, color: colors.text },
                    legend: { display: false }
                },
                scales: {
                    x: { 
                        title: { display: true, text: 'Risk (Beta)', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    },
                    y: { 
                        title: { display: true, text: 'EPS Growth (%)', color: colors.text },
                        ticks: { color: colors.text }, 
                        grid: { color: colors.grid } 
                    }
                }
            }
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new NIFTY500App();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    Object.keys(AppState.charts).forEach(chartId => {
        if (AppState.charts[chartId]) {
            AppState.charts[chartId].destroy();
        }
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('🚨 Application Error:', e.error);
});

// Performance monitoring
window.addEventListener('load', () => {
    console.log('⚡ NIFTY500 Platform loaded successfully');
    console.log(`📊 Analyzed ${DataStore.companies.length} companies across ${DataStore.sectors.length} sectors`);
    console.log('🔬 Research by: Research Scientist - Survesh Bajpai | Surveshb2@gmail.com');
});