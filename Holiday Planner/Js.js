/**
 * Holiday Planner Application
 * Main JavaScript file with modular structure
 * Dependencies: jQuery 3.7.0, Bootstrap 5.3.0
 */

$(document).ready(function() {
    // Initialize the application
    HolidayPlanner.init();
});

// Main Application Object
const HolidayPlanner = {
    // Application state
    state: {
        currentView: 'home',
        selectedInterests: [],
        itinerary: {
            title: 'My Holiday Itinerary',
            startDate: '',
            endDate: '',
            partySize: 2,
            days: [],
            totalBudget: 1500
        },
        searchResults: [],
        filteredResults: []
    },

    // Sample data embedded in the application
    data: {
        destinations: [
            {
                "id": "d1",
                "name": "Coastal Bay Resort",
                "interests": ["beach", "relaxation"],
                "lat": 12.34,
                "lon": 56.78,
                "summary": "Sandy beaches and seaside cafes with stunning sunset views",
                "rating": 4.5,
                "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                "accommodations": [
                    {"id": "h1", "name": "Bay Resort Hotel", "stars": 4, "price_per_night": 120, "amenities": ["Pool", "Beach Access", "WiFi"]},
                    {"id": "h2", "name": "Coastal Inn", "stars": 3, "price_per_night": 85, "amenities": ["WiFi", "Breakfast"]}
                ],
                "activities": [
                    {"id": "a1", "title": "Snorkeling Tour", "duration_mins": 120, "cost": 40, "time_of_day": "morning"},
                    {"id": "a2", "title": "Beach Volleyball", "duration_mins": 60, "cost": 0, "time_of_day": "afternoon"},
                    {"id": "a3", "title": "Sunset Dinner Cruise", "duration_mins": 180, "cost": 75, "time_of_day": "evening"}
                ],
                "transport": [
                    {"id": "t1", "type": "flight", "from": "DEL", "to": "CST", "price": 180, "duration_mins": 120}
                ]
            },
            {
                "id": "d2",
                "name": "Mountain Peak Adventure",
                "interests": ["mountains", "adventure"],
                "lat": 28.7041,
                "lon": 77.1025,
                "summary": "High-altitude hiking and breathtaking mountain views",
                "rating": 4.8,
                "image": "https://images.unsplash.com/photo-1464822759844-d150ad23829b?w=400",
                "accommodations": [
                    {"id": "h3", "name": "Alpine Lodge", "stars": 4, "price_per_night": 95, "amenities": ["Mountain View", "Fireplace", "WiFi"]},
                    {"id": "h4", "name": "Base Camp Hostel", "stars": 2, "price_per_night": 35, "amenities": ["Shared Kitchen", "WiFi"]}
                ],
                "activities": [
                    {"id": "a4", "title": "Summit Hiking", "duration_mins": 360, "cost": 0, "time_of_day": "morning"},
                    {"id": "a5", "title": "Rock Climbing", "duration_mins": 240, "cost": 60, "time_of_day": "morning"},
                    {"id": "a6", "title": "Campfire Stories", "duration_mins": 90, "cost": 10, "time_of_day": "evening"}
                ],
                "transport": [
                    {"id": "t2", "type": "bus", "from": "DEL", "to": "MTN", "price": 45, "duration_mins": 300}
                ]
            },
            {
                "id": "d3",
                "name": "Cultural City Center",
                "interests": ["city", "culture"],
                "lat": 19.0760,
                "lon": 72.8777,
                "summary": "Historic landmarks, museums, and vibrant street markets",
                "rating": 4.3,
                "image": "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400",
                "accommodations": [
                    {"id": "h5", "name": "Heritage Hotel", "stars": 5, "price_per_night": 150, "amenities": ["Historic Building", "Spa", "Restaurant"]},
                    {"id": "h6", "name": "City Center Inn", "stars": 3, "price_per_night": 70, "amenities": ["Central Location", "WiFi"]}
                ],
                "activities": [
                    {"id": "a7", "title": "Museum Tour", "duration_mins": 180, "cost": 25, "time_of_day": "morning"},
                    {"id": "a8", "title": "Street Food Walk", "duration_mins": 120, "cost": 20, "time_of_day": "afternoon"},
                    {"id": "a9", "title": "Cultural Performance", "duration_mins": 90, "cost": 35, "time_of_day": "evening"}
                ],
                "transport": [
                    {"id": "t3", "type": "flight", "from": "DEL", "to": "MUM", "price": 120, "duration_mins": 150}
                ]
            },
            {
                "id": "d4",
                "name": "Adventure Valley",
                "interests": ["adventure", "mountains"],
                "lat": 32.2190,
                "lon": 76.3234,
                "summary": "White water rafting, zip-lining, and extreme sports",
                "rating": 4.6,
                "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
                "accommodations": [
                    {"id": "h7", "name": "Adventure Camp", "stars": 3, "price_per_night": 80, "amenities": ["Outdoor Activities", "Campfire", "Meals Included"]},
                    {"id": "h8", "name": "Valley Resort", "stars": 4, "price_per_night": 110, "amenities": ["Spa", "Adventure Packages", "WiFi"]}
                ],
                "activities": [
                    {"id": "a10", "title": "White Water Rafting", "duration_mins": 240, "cost": 80, "time_of_day": "morning"},
                    {"id": "a11", "title": "Zip Line Adventure", "duration_mins": 60, "cost": 45, "time_of_day": "afternoon"},
                    {"id": "a12", "title": "Night Trek", "duration_mins": 180, "cost": 30, "time_of_day": "evening"}
                ],
                "transport": [
                    {"id": "t4", "type": "bus", "from": "DEL", "to": "ADV", "price": 60, "duration_mins": 420}
                ]
            },
            {
                "id": "d5",
                "name": "Tranquil Lake Retreat",
                "interests": ["relaxation", "nature"],
                "lat": 24.5854,
                "lon": 73.7125,
                "summary": "Peaceful lakeside setting with spa treatments and meditation",
                "rating": 4.7,
                "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                "accommodations": [
                    {"id": "h9", "name": "Lakeside Spa Resort", "stars": 5, "price_per_night": 180, "amenities": ["Spa", "Lake View", "Yoga Classes"]},
                    {"id": "h10", "name": "Lake Cottage", "stars": 3, "price_per_night": 90, "amenities": ["Private Cottage", "Lake Access", "WiFi"]}
                ],
                "activities": [
                    {"id": "a13", "title": "Morning Yoga", "duration_mins": 60, "cost": 15, "time_of_day": "morning"},
                    {"id": "a14", "title": "Lake Kayaking", "duration_mins": 120, "cost": 25, "time_of_day": "afternoon"},
                    {"id": "a15", "title": "Meditation Session", "duration_mins": 45, "cost": 10, "time_of_day": "evening"}
                ],
                "transport": [
                    {"id": "t5", "type": "train", "from": "DEL", "to": "LKE", "price": 75, "duration_mins": 360}
                ]
            },
            // Additional destinations to make search more meaningful
            {
                "id": "d6",
                "name": "Paris City Break",
                "interests": ["city", "culture"],
                "lat": 48.8566,
                "lon": 2.3522,
                "summary": "The city of light with iconic landmarks, museums, and cuisine",
                "rating": 4.9,
                "image": "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400",
                "accommodations": [
                    {"id": "h11", "name": "Le Grand Hotel", "stars": 5, "price_per_night": 250, "amenities": ["Luxury", "Central Location", "Concierge"]},
                    {"id": "h12", "name": "Budget Paris Inn", "stars": 2, "price_per_night": 60, "amenities": ["WiFi", "Basic"]}
                ],
                "activities": [
                    {"id": "a16", "title": "Eiffel Tower Visit", "duration_mins": 120, "cost": 25, "time_of_day": "afternoon"},
                    {"id": "a17", "title": "Louvre Museum", "duration_mins": 240, "cost": 17, "time_of_day": "morning"},
                    {"id": "a18", "title": "Seine River Cruise", "duration_mins": 90, "cost": 15, "time_of_day": "evening"}
                ],
                "transport": [
                    {"id": "t6", "type": "flight", "from": "DEL", "to": "CDG", "price": 800, "duration_mins": 480}
                ]
            }
        ],

        sampleItinerary: {
            "id": "sample1",
            "title": "5-Day Coastal Escape",
            "startDate": "2024-06-15",
            "endDate": "2024-06-19",
            "partySize": 2,
            "totalBudget": 1500,
            "days": [
                {
                    "date": "2024-06-15",
                    "items": [
                        {"type": "transport", "id": "t1", "time": "10:00", "name": "Flight to Coastal Bay", "cost": 180, "notes": "Arrive early for check-in"},
                        {"type": "accommodation", "id": "h1", "time": "14:00", "name": "Bay Resort Hotel Check-in", "cost": 120, "notes": "Ocean view room"},
                        {"type": "activity", "id": "a2", "time": "16:00", "name": "Beach Volleyball", "cost": 0, "notes": "Relax on arrival day"}
                    ]
                },
                {
                    "date": "2024-06-16",
                    "items": [
                        {"type": "activity", "id": "a1", "time": "09:00", "name": "Snorkeling Tour", "cost": 40, "notes": "Bring underwater camera"},
                        {"type": "activity", "id": "a3", "time": "18:00", "name": "Sunset Dinner Cruise", "cost": 75, "notes": "Romantic evening"}
                    ]
                }
            ]
        },

        interests: ["beach", "mountains", "city", "culture", "adventure", "relaxation"],
        budgetCategories: ["accommodation", "transport", "activities", "food", "miscellaneous"]
    },

    // Initialize the application
    init() {
        this.bindEvents();
        this.initializeDates();
        this.loadSavedData();
        this.showView('home');
        this.startAutoSave();
        
        // Load URL parameters if any
        this.loadFromURL();
        
        // Show initial search results
        this.updateSearchResults();
    },

    // Bind event listeners
    bindEvents() {
        // Navigation
        $('[data-view]').on('click', (e) => {
            const view = $(e.target).data('view');
            this.showView(view);
        });

        // Search form
        $('#quick-search-form').on('submit', (e) => {
            e.preventDefault();
            this.handleQuickSearch();
        });

        // Interest tags
        $('.interest-tag').on('click', (e) => {
            const interest = $(e.target).data('interest');
            this.toggleInterest(interest, e.target);
        });

        // Search and filters - bind to both input and change events
        $('#apply-filters, #search-input, #interest-filter, #budget-filter, #rating-filter').on('input change keyup', () => {
            this.updateSearchResults();
        });

        $('#clear-filters').on('click', () => {
            this.clearFilters();
        });

        // Search results click
        $(document).on('click', '.destination-card', (e) => {
            const destinationId = $(e.currentTarget).data('destination-id');
            this.showDestinationDetails(destinationId);
        });

        // Itinerary controls
        $('#itinerary-title').on('input', (e) => {
            this.state.itinerary.title = $(e.target).val();
        });

        $('#itinerary-start-date, #itinerary-end-date').on('change', () => {
            this.updateItineraryDates();
        });

        $('#add-day').on('click', () => {
            this.addDay();
        });

        // Budget controls
        $('#total-budget').on('input', (e) => {
            this.state.itinerary.totalBudget = parseInt($(e.target).val()) || 0;
            this.updateBudgetDisplay();
        });

        $('#expense-form').on('submit', (e) => {
            e.preventDefault();
            this.addManualExpense();
        });

        // Save/Load/Share
        $('#save-itinerary').on('click', () => {
            this.saveItinerary();
        });

        $('#export-json').on('click', () => {
            this.exportItinerary();
        });

        $('#import-btn').on('click', () => {
            $('#import-json').click();
        });

        $('#import-json').on('change', (e) => {
            this.importItinerary(e.target.files[0]);
        });

        $('#share-itinerary').on('click', () => {
            this.shareItinerary();
        });

        $('#copy-url').on('click', () => {
            this.copyShareURL();
        });

        // Sample itinerary
        $('#load-sample-btn').on('click', () => {
            this.loadSampleItinerary();
        });

        // Modal events
        $(document).on('click', '.add-to-itinerary', (e) => {
            const itemData = $(e.target).data();
            this.addToItinerary(itemData);
        });

        // Timeline item time changes - use event delegation
        $(document).on('change', '.timeline-item input[type="time"]', (e) => {
            const $item = $(e.target).closest('.timeline-item');
            const dayIndex = parseInt($item.data('day'));
            const itemIndex = parseInt($item.data('item'));
            const newTime = $(e.target).val();
            
            if (!isNaN(dayIndex) && !isNaN(itemIndex)) {
                this.updateItemTime(dayIndex, itemIndex, newTime);
            }
        });

        // Drag and drop for timeline items
        this.initializeDragAndDrop();
    },

    // Initialize date inputs with default values
    initializeDates() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        $('#start-date, #itinerary-start-date').val(this.formatDate(today));
        $('#end-date, #itinerary-end-date').val(this.formatDate(tomorrow));
        
        this.state.itinerary.startDate = this.formatDate(today);
        this.state.itinerary.endDate = this.formatDate(tomorrow);
    },

    // Show specific view
    showView(viewName) {
        $('.view-section').removeClass('active');
        $(`#${viewName}-view`).addClass('active');
        
        $('.nav-link').removeClass('active');
        $(`[data-view="${viewName}"]`).addClass('active');
        
        this.state.currentView = viewName;

        // Update view-specific content
        switch(viewName) {
            case 'search':
                this.updateSearchResults();
                break;
            case 'itinerary':
                this.updateItineraryDisplay();
                break;
            case 'budget':
                this.updateBudgetDisplay();
                break;
        }
    },

    // Handle quick search form submission
    handleQuickSearch() {
        const destination = $('#destination-input').val();
        const startDate = $('#start-date').val();
        const endDate = $('#end-date').val();
        const partySize = $('#party-size').val();

        // Update state
        this.state.itinerary.startDate = startDate;
        this.state.itinerary.endDate = endDate;
        this.state.itinerary.partySize = parseInt(partySize);

        // Set search input and show search view
        $('#search-input').val(destination);
        this.updateSearchResults();
        this.showView('search');
        
        this.showToast('Search started! Browse destinations below.', 'success');
    },

    // Toggle interest selection
    toggleInterest(interest, element) {
        const $element = $(element);
        
        if ($element.hasClass('active')) {
            $element.removeClass('active');
            this.state.selectedInterests = this.state.selectedInterests.filter(i => i !== interest);
        } else {
            $element.addClass('active');
            this.state.selectedInterests.push(interest);
        }

        this.updateSearchResults();
    },

    // Update search results based on filters
    updateSearchResults() {
        const searchTerm = $('#search-input').val().toLowerCase();
        const interestFilter = $('#interest-filter').val();
        const budgetFilter = $('#budget-filter').val();
        const ratingFilter = parseFloat($('#rating-filter').val()) || 0;

        let results = this.data.destinations;

        // Apply filters
        if (searchTerm) {
            results = results.filter(dest => 
                dest.name.toLowerCase().includes(searchTerm) || 
                dest.summary.toLowerCase().includes(searchTerm) ||
                dest.interests.some(interest => interest.toLowerCase().includes(searchTerm))
            );
        }

        if (interestFilter) {
            results = results.filter(dest => dest.interests.includes(interestFilter));
        }

        if (this.state.selectedInterests.length > 0) {
            results = results.filter(dest => 
                this.state.selectedInterests.some(interest => dest.interests.includes(interest))
            );
        }

        if (budgetFilter) {
            results = results.filter(dest => {
                const avgCost = this.calculateDestinationAverageCost(dest);
                switch(budgetFilter) {
                    case 'low': return avgCost <= 50;
                    case 'medium': return avgCost > 50 && avgCost <= 150;
                    case 'high': return avgCost > 150;
                    default: return true;
                }
            });
        }

        if (ratingFilter > 0) {
            results = results.filter(dest => dest.rating >= ratingFilter);
        }

        this.state.filteredResults = results;
        this.renderSearchResults(results);
    },

    // Calculate average cost for a destination
    calculateDestinationAverageCost(destination) {
        let totalCost = 0;
        let itemCount = 0;

        destination.accommodations.forEach(acc => {
            totalCost += acc.price_per_night;
            itemCount++;
        });

        destination.activities.forEach(act => {
            totalCost += act.cost;
            itemCount++;
        });

        return itemCount > 0 ? totalCost / itemCount : 0;
    },

    // Render search results
    renderSearchResults(results) {
        const container = $('#search-results');
        
        if (results.length === 0) {
            container.html(`
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search display-1 text-muted"></i>
                    <h3 class="mt-3">No destinations found</h3>
                    <p class="text-muted">Try adjusting your search criteria or clearing filters.</p>
                </div>
            `);
            return;
        }

        const html = results.map(dest => this.createDestinationCard(dest)).join('');
        container.html(html);
    },

    // Create destination card HTML
    createDestinationCard(destination) {
        const interestBadges = destination.interests.map(interest => 
            `<span class="badge bg-light text-dark me-1">${interest}</span>`
        ).join('');

        const stars = '★'.repeat(Math.floor(destination.rating)) + 
                     (destination.rating % 1 ? '☆' : '');

        // Use actual image if available, otherwise show a themed placeholder
        const imageHtml = destination.image ? 
            `<img src="${destination.image}" class="card-img-top destination-image" alt="${destination.name}" style="height: 200px; object-fit: cover;" loading="lazy">` :
            `<div class="destination-image-placeholder">
                <i class="bi bi-image display-4"></i>
                <small>Image placeholder</small>
            </div>`;

        return `
            <div class="col-md-6 col-lg-4">
                <div class="card destination-card h-100" data-destination-id="${destination.id}">
                    ${imageHtml}
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title mb-0">${destination.name}</h5>
                            <small class="rating-stars">${stars} ${destination.rating}</small>
                        </div>
                        <p class="card-text text-muted small mb-3">${destination.summary}</p>
                        <div class="interest-badges mb-3">
                            ${interestBadges}
                        </div>
                        <button class="btn btn-primary btn-sm">
                            <i class="bi bi-eye"></i> View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Show destination details in modal
    showDestinationDetails(destinationId) {
        const destination = this.data.destinations.find(d => d.id === destinationId);
        if (!destination) return;

        const modalBody = $('#destinationModalBody');
        const accommodationsHtml = destination.accommodations.map(acc => this.createAccommodationCard(acc, destinationId)).join('');
        const activitiesHtml = destination.activities.map(act => this.createActivityCard(act, destinationId)).join('');
        const transportHtml = destination.transport.map(trans => this.createTransportCard(trans, destinationId)).join('');

        modalBody.html(`
            <div class="mb-4">
                <h4>${destination.name}</h4>
                <p class="text-muted">${destination.summary}</p>
                <div class="d-flex align-items-center mb-3">
                    <span class="rating-stars me-2">${'★'.repeat(Math.floor(destination.rating))} ${destination.rating}</span>
                    <span class="text-muted">• ${destination.interests.join(', ')}</span>
                </div>
            </div>

            <h5>Accommodations</h5>
            <div class="row mb-4">
                ${accommodationsHtml}
            </div>

            <h5>Activities</h5>
            <div class="row mb-4">
                ${activitiesHtml}
            </div>

            <h5>Transport</h5>
            <div class="row">
                ${transportHtml}
            </div>
        `);

        $('#destinationModalLabel').text(destination.name);
        new bootstrap.Modal(document.getElementById('destinationModal')).show();
    },

    // Create accommodation card
    createAccommodationCard(accommodation, destinationId) {
        const amenities = accommodation.amenities.map(amenity => 
            `<span class="amenity-tag">${amenity}</span>`
        ).join('');

        return `
            <div class="col-md-6 mb-3">
                <div class="accommodation-card">
                    <h6>${accommodation.name}</h6>
                    <div class="star-rating mb-2">${'★'.repeat(accommodation.stars)}</div>
                    <div class="amenities-list mb-3">${amenities}</div>
                    <div class="d-flex justify-content-between align-items-center">
                        <strong>$${accommodation.price_per_night}/night</strong>
                        <button class="btn btn-primary btn-sm add-to-itinerary" 
                                data-type="accommodation" 
                                data-id="${accommodation.id}"
                                data-name="${accommodation.name}"
                                data-cost="${accommodation.price_per_night}"
                                data-destination-id="${destinationId}">
                            Add to Itinerary
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Create activity card
    createActivityCard(activity, destinationId) {
        const duration = Math.floor(activity.duration_mins / 60) + 'h ' + (activity.duration_mins % 60) + 'm';
        const costText = activity.cost === 0 ? 'Free' : `$${activity.cost}`;

        return `
            <div class="col-md-6 mb-3">
                <div class="activity-card">
                    <h6>${activity.title}</h6>
                    <div class="d-flex justify-content-between text-muted small mb-2">
                        <span>${duration}</span>
                        <span>${activity.time_of_day}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <strong>${costText}</strong>
                        <button class="btn btn-primary btn-sm add-to-itinerary" 
                                data-type="activity" 
                                data-id="${activity.id}"
                                data-name="${activity.title}"
                                data-cost="${activity.cost}"
                                data-duration="${activity.duration_mins}"
                                data-destination-id="${destinationId}">
                            Add to Itinerary
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Create transport card
    createTransportCard(transport, destinationId) {
        const duration = Math.floor(transport.duration_mins / 60) + 'h ' + (transport.duration_mins % 60) + 'm';

        return `
            <div class="col-md-6 mb-3">
                <div class="accommodation-card">
                    <h6>${transport.type.charAt(0).toUpperCase() + transport.type.slice(1)}</h6>
                    <div class="d-flex justify-content-between text-muted small mb-2">
                        <span>${transport.from} → ${transport.to}</span>
                        <span>${duration}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <strong>$${transport.price}</strong>
                        <button class="btn btn-primary btn-sm add-to-itinerary" 
                                data-type="transport" 
                                data-id="${transport.id}"
                                data-name="${transport.type} (${transport.from} → ${transport.to})"
                                data-cost="${transport.price}"
                                data-duration="${transport.duration_mins}"
                                data-destination-id="${destinationId}">
                            Add to Itinerary
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Add item to itinerary
    addToItinerary(itemData) {
        // Ensure we have days in the itinerary
        if (this.state.itinerary.days.length === 0) {
            this.generateDaysFromDateRange();
        }

        // Add to the first day for simplicity
        if (this.state.itinerary.days.length > 0) {
            const newItem = {
                type: itemData.type,
                id: itemData.id || this.generateId(),
                name: itemData.name,
                cost: parseInt(itemData.cost) || 0,
                time: this.getDefaultTimeForType(itemData.type),
                duration: itemData.duration || 60,
                notes: ''
            };

            this.state.itinerary.days[0].items.push(newItem);
            this.updateItineraryDisplay();
            this.updateBudgetDisplay();
            
            // Close modal and show success message
            bootstrap.Modal.getInstance(document.getElementById('destinationModal')).hide();
            this.showToast(`${itemData.name} added to your itinerary!`, 'success');
        }
    },

    // Get default time for item type
    getDefaultTimeForType(type) {
        switch(type) {
            case 'accommodation': return '15:00';
            case 'transport': return '10:00';
            case 'activity': return '12:00';
            default: return '12:00';
        }
    },

    // Update itinerary dates
    updateItineraryDates() {
        const startDate = $('#itinerary-start-date').val();
        const endDate = $('#itinerary-end-date').val();

        if (startDate && endDate) {
            this.state.itinerary.startDate = startDate;
            this.state.itinerary.endDate = endDate;
            this.generateDaysFromDateRange();
            this.updateItineraryDisplay();
        }
    },

    // Generate days from date range
    generateDaysFromDateRange() {
        const start = new Date(this.state.itinerary.startDate);
        const end = new Date(this.state.itinerary.endDate);
        const existingItems = {};

        // Preserve existing items
        this.state.itinerary.days.forEach(day => {
            existingItems[day.date] = day.items;
        });

        // Generate new days
        this.state.itinerary.days = [];
        const currentDate = new Date(start);

        while (currentDate <= end) {
            const dateString = this.formatDate(currentDate);
            this.state.itinerary.days.push({
                date: dateString,
                items: existingItems[dateString] || []
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
    },

    // Add a new day
    addDay() {
        if (this.state.itinerary.days.length === 0) {
            this.generateDaysFromDateRange();
        } else {
            const lastDay = new Date(this.state.itinerary.days[this.state.itinerary.days.length - 1].date);
            lastDay.setDate(lastDay.getDate() + 1);
            
            this.state.itinerary.days.push({
                date: this.formatDate(lastDay),
                items: []
            });
        }
        
        this.updateItineraryDisplay();
    },

    // Update itinerary display
    updateItineraryDisplay() {
        $('#itinerary-title').val(this.state.itinerary.title);
        $('#itinerary-start-date').val(this.state.itinerary.startDate);
        $('#itinerary-end-date').val(this.state.itinerary.endDate);

        const timeline = $('#itinerary-timeline');
        
        if (this.state.itinerary.days.length === 0) {
            timeline.html(`
                <div class="drop-zone">
                    <div class="drop-zone-text">
                        <i class="bi bi-calendar-plus display-4 text-muted"></i>
                        <p>Set your travel dates to start building your itinerary</p>
                    </div>
                </div>
            `);
        } else {
            const daysHtml = this.state.itinerary.days.map((day, dayIndex) => 
                this.createTimelineDay(day, dayIndex)
            ).join('');
            timeline.html(daysHtml);
        }

        this.updateSummary();
    },

    // Create timeline day HTML
    createTimelineDay(day, dayIndex) {
        const dayName = this.getDayName(day.date);
        const formattedDate = this.formatDisplayDate(day.date);
        
        const itemsHtml = day.items.length > 0 
            ? day.items.map((item, itemIndex) => this.createTimelineItem(item, dayIndex, itemIndex)).join('')
            : `<div class="drop-zone" data-day="${dayIndex}">
                 <div class="drop-zone-text">
                   <i class="bi bi-plus-circle"></i>
                   <p>Drop items here or add from destinations</p>
                 </div>
               </div>`;

        return `
            <div class="timeline-day" data-day="${dayIndex}">
                <div class="timeline-day-header">
                    <div>
                        <h4 class="mb-0">${dayName}</h4>
                        <small class="text-muted">${formattedDate}</small>
                    </div>
                    <div>
                        <span class="badge bg-primary">
                            $${this.calculateDayCost(day)} total
                        </span>
                    </div>
                </div>
                <div class="timeline-items" data-day="${dayIndex}">
                    ${itemsHtml}
                </div>
            </div>
        `;
    },

    // Create timeline item HTML
    createTimelineItem(item, dayIndex, itemIndex) {
        const typeIcon = this.getTypeIcon(item.type);
        
        return `
            <div class="timeline-item draggable" 
                 draggable="true" 
                 data-day="${dayIndex}" 
                 data-item="${itemIndex}"
                 data-type="${item.type}">
                <div class="d-flex align-items-start">
                    <div class="timeline-item-time me-3">
                        <input type="time" class="form-control form-control-sm" 
                               value="${item.time}">
                    </div>
                    <div class="flex-grow-1">
                        <div class="timeline-item-title">
                            <i class="${typeIcon} me-2"></i>
                            ${item.name}
                        </div>
                        <div class="timeline-item-cost">$${item.cost}</div>
                        ${item.notes ? `<div class="timeline-item-notes">${item.notes}</div>` : ''}
                    </div>
                    <div class="timeline-item-actions">
                        <button class="btn btn-sm btn-outline-secondary" 
                                onclick="HolidayPlanner.editItemNotes(${dayIndex}, ${itemIndex})">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" 
                                onclick="HolidayPlanner.removeItem(${dayIndex}, ${itemIndex})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Get icon for item type
    getTypeIcon(type) {
        switch(type) {
            case 'accommodation': return 'bi bi-house';
            case 'transport': return 'bi bi-airplane';
            case 'activity': return 'bi bi-star';
            case 'food': return 'bi bi-cup';
            default: return 'bi bi-circle';
        }
    },

    // Update item time
    updateItemTime(dayIndex, itemIndex, newTime) {
        if (this.state.itinerary.days[dayIndex] && this.state.itinerary.days[dayIndex].items[itemIndex]) {
            this.state.itinerary.days[dayIndex].items[itemIndex].time = newTime;
            this.showToast('Time updated', 'info');
        }
    },

    // Edit item notes
    editItemNotes(dayIndex, itemIndex) {
        const currentNotes = this.state.itinerary.days[dayIndex].items[itemIndex].notes;
        const newNotes = prompt('Edit notes:', currentNotes);
        
        if (newNotes !== null) {
            this.state.itinerary.days[dayIndex].items[itemIndex].notes = newNotes;
            this.updateItineraryDisplay();
        }
    },

    // Remove item from itinerary
    removeItem(dayIndex, itemIndex) {
        if (confirm('Remove this item from your itinerary?')) {
            this.state.itinerary.days[dayIndex].items.splice(itemIndex, 1);
            this.updateItineraryDisplay();
            this.updateBudgetDisplay();
            this.showToast('Item removed from itinerary', 'info');
        }
    },

    // Calculate day cost
    calculateDayCost(day) {
        return day.items.reduce((total, item) => total + (item.cost || 0), 0);
    },

    // Update summary
    updateSummary() {
        const totalCost = this.calculateTotalCost();
        const totalDays = this.state.itinerary.days.length;
        const totalItems = this.state.itinerary.days.reduce((total, day) => total + day.items.length, 0);

        $('#total-cost').text(`$${totalCost}`);
        $('#total-days').text(`${totalDays} days`);
        $('#total-items').text(totalItems);

        // Update map locations
        this.updateMapLocations();
    },

    // Update map locations display
    updateMapLocations() {
        const locations = new Set();
        
        this.state.itinerary.days.forEach(day => {
            day.items.forEach(item => {
                // Find destination for this item
                const destination = this.data.destinations.find(d => 
                    d.accommodations.some(a => a.id === item.id) ||
                    d.activities.some(a => a.id === item.id) ||
                    d.transport.some(t => t.id === item.id)
                );
                
                if (destination) {
                    locations.add(destination.name);
                }
            });
        });

        const mapContainer = $('#map-locations');
        if (locations.size > 0) {
            const locationHtml = Array.from(locations).map(location => `
                <div class="location-item">
                    <i class="bi bi-geo-alt me-2"></i>
                    ${location}
                </div>
            `).join('');
            mapContainer.html(locationHtml);
        } else {
            mapContainer.html('<p class="text-muted text-center">No destinations added yet</p>');
        }
    },

    // Initialize drag and drop
    initializeDragAndDrop() {
        $(document).on('dragstart', '.draggable', (e) => {
            $(e.target).addClass('dragging');
            e.originalEvent.dataTransfer.setData('text/plain', '');
        });

        $(document).on('dragend', '.draggable', (e) => {
            $(e.target).removeClass('dragging');
        });

        $(document).on('dragover', '.timeline-items, .drop-zone', (e) => {
            e.preventDefault();
            $(e.currentTarget).addClass('drag-over');
        });

        $(document).on('dragleave', '.timeline-items, .drop-zone', (e) => {
            $(e.currentTarget).removeClass('drag-over');
        });

        $(document).on('drop', '.timeline-items, .drop-zone', (e) => {
            e.preventDefault();
            $(e.currentTarget).removeClass('drag-over');
            
            const draggedElement = $('.dragging');
            if (draggedElement.length === 0) return;

            const fromDay = parseInt(draggedElement.data('day'));
            const fromItem = parseInt(draggedElement.data('item'));
            const toDay = parseInt($(e.currentTarget).data('day') || $(e.currentTarget).closest('[data-day]').data('day'));

            if (fromDay !== toDay) {
                this.moveItem(fromDay, fromItem, toDay);
            }
        });
    },

    // Move item between days
    moveItem(fromDay, fromItem, toDay) {
        const item = this.state.itinerary.days[fromDay].items.splice(fromItem, 1)[0];
        this.state.itinerary.days[toDay].items.push(item);
        this.updateItineraryDisplay();
        this.showToast('Item moved successfully', 'success');
    },

    // Calculate total cost
    calculateTotalCost() {
        return this.state.itinerary.days.reduce((total, day) => 
            total + this.calculateDayCost(day), 0
        );
    },

    // Update budget display
    updateBudgetDisplay() {
        const totalSpent = this.calculateTotalCost();
        const totalBudget = this.state.itinerary.totalBudget;
        const remaining = totalBudget - totalSpent;
        const percentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;
        const perPersonCost = Math.round(totalSpent / this.state.itinerary.partySize);

        $('#total-spent').text(`$${totalSpent}`);
        $('#budget-remaining').text(`$${remaining}`);
        $('#per-person-cost').text(`$${perPersonCost}`);
        $('#travelers-count').text(this.state.itinerary.partySize);

        // Update progress bar
        const progressBar = $('#budget-progress');
        progressBar.css('width', `${Math.min(percentage, 100)}%`);
        progressBar.attr('aria-valuenow', percentage);
        progressBar.text(`${Math.round(percentage)}%`);

        // Change color based on usage
        progressBar.removeClass('bg-success bg-warning bg-danger');
        if (percentage <= 70) {
            progressBar.addClass('bg-success');
        } else if (percentage <= 90) {
            progressBar.addClass('bg-warning');
        } else {
            progressBar.addClass('bg-danger');
        }

        this.updateBudgetBreakdown();
    },

    // Update budget breakdown
    updateBudgetBreakdown() {
        const breakdown = {
            accommodation: 0,
            transport: 0,
            activities: 0,
            food: 0,
            miscellaneous: 0
        };

        this.state.itinerary.days.forEach(day => {
            day.items.forEach(item => {
                const category = item.type === 'activity' ? 'activities' : item.type;
                breakdown[category] = (breakdown[category] || 0) + (item.cost || 0);
            });
        });

        const container = $('#budget-breakdown');
        const html = Object.entries(breakdown).map(([category, amount]) => {
            if (amount === 0) return '';
            
            return `
                <div class="budget-category">
                    <div class="budget-category-header">
                        <span class="budget-category-title">${category}</span>
                        <span class="budget-category-amount">$${amount}</span>
                    </div>
                </div>
            `;
        }).join('');

        container.html(html || '<p class="text-muted">No expenses yet</p>');
    },

    // Add manual expense
    addManualExpense() {
        const name = $('#expense-name').val();
        const amount = parseInt($('#expense-amount').val());
        const category = $('#expense-category').val();

        if (name && amount) {
            // Add to the first day or create a day if none exists
            if (this.state.itinerary.days.length === 0) {
                this.generateDaysFromDateRange();
            }

            const newItem = {
                type: category,
                id: this.generateId(),
                name: name,
                cost: amount,
                time: '12:00',
                notes: 'Manual expense'
            };

            this.state.itinerary.days[0].items.push(newItem);
            
            // Reset form
            $('#expense-form')[0].reset();
            
            this.updateItineraryDisplay();
            this.updateBudgetDisplay();
            this.showToast(`Expense "${name}" added successfully`, 'success');
        }
    },

    // Clear all filters
    clearFilters() {
        $('#search-input').val('');
        $('#interest-filter').val('');
        $('#budget-filter').val('');
        $('#rating-filter').val('');
        $('.interest-tag').removeClass('active');
        this.state.selectedInterests = [];
        this.updateSearchResults();
        this.showToast('Filters cleared', 'info');
    },

    // Load sample itinerary
    loadSampleItinerary() {
        this.state.itinerary = { ...this.data.sampleItinerary };
        this.updateItineraryDisplay();
        this.updateBudgetDisplay();
        this.showView('itinerary');
        this.showToast('Sample itinerary loaded!', 'success');
    },

    // Save itinerary to localStorage
    saveItinerary() {
        const key = `itinerary_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(this.state.itinerary));
        localStorage.setItem('holiday_planner_current', JSON.stringify(this.state.itinerary));
        this.showToast('Itinerary saved successfully!', 'success');
    },

    // Export itinerary as JSON
    exportItinerary() {
        const dataStr = JSON.stringify(this.state.itinerary, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.state.itinerary.title.replace(/\s+/g, '_')}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showToast('Itinerary exported!', 'success');
    },

    // Import itinerary from file
    importItinerary(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                this.state.itinerary = imported;
                this.updateItineraryDisplay();
                this.updateBudgetDisplay();
                this.showToast('Itinerary imported successfully!', 'success');
            } catch (error) {
                this.showToast('Error importing itinerary. Please check the file format.', 'error');
            }
        };
        reader.readAsText(file);
    },

    // Share itinerary via URL
    shareItinerary() {
        const data = JSON.stringify(this.state.itinerary);
        const encoded = btoa(encodeURIComponent(data));
        const shareURL = `${window.location.origin}${window.location.pathname}?itinerary=${encoded}`;
        
        $('#share-url').val(shareURL);
        new bootstrap.Modal(document.getElementById('shareModal')).show();
    },

    // Copy share URL to clipboard
    copyShareURL() {
        const urlInput = $('#share-url')[0];
        urlInput.select();
        urlInput.setSelectionRange(0, 99999);
        
        try {
            document.execCommand('copy');
            this.showToast('URL copied to clipboard!', 'success');
        } catch (err) {
            this.showToast('Could not copy URL. Please copy manually.', 'error');
        }
    },

    // Load itinerary from URL
    loadFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const encodedItinerary = urlParams.get('itinerary');
        
        if (encodedItinerary) {
            try {
                const data = decodeURIComponent(atob(encodedItinerary));
                const itinerary = JSON.parse(data);
                this.state.itinerary = itinerary;
                this.updateItineraryDisplay();
                this.updateBudgetDisplay();
                this.showView('itinerary');
                this.showToast('Shared itinerary loaded!', 'success');
            } catch (error) {
                this.showToast('Error loading shared itinerary.', 'error');
            }
        }
    },

    // Load saved data from localStorage
    loadSavedData() {
        const saved = localStorage.getItem('holiday_planner_current');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.state.itinerary = { ...this.state.itinerary, ...data };
                $('#total-budget').val(this.state.itinerary.totalBudget);
            } catch (error) {
                console.warn('Could not load saved data:', error);
            }
        }
    },

    // Auto-save functionality
    startAutoSave() {
        setInterval(() => {
            localStorage.setItem('holiday_planner_autosave', JSON.stringify(this.state.itinerary));
        }, 15000); // Auto-save every 15 seconds
    },

    // Show toast notification (fixed to prevent navigation issues)
    showToast(message, type = 'info') {
        const toastId = `toast_${Date.now()}`;
        const iconClass = {
            success: 'bi-check-circle',
            error: 'bi-exclamation-circle',
            warning: 'bi-exclamation-triangle',
            info: 'bi-info-circle'
        }[type];

        const toastHtml = `
            <div class="toast ${type}" role="alert" id="${toastId}" data-bs-autohide="true" data-bs-delay="4000">
                <div class="toast-header">
                    <i class="${iconClass} me-2"></i>
                    <strong class="me-auto">Holiday Planner</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    ${message}
                </div>
            </div>
        `;

        $('#toast-container').append(toastHtml);
        const toastElement = new bootstrap.Toast(document.getElementById(toastId));
        toastElement.show();

        // Clean up after toast is hidden
        $(`#${toastId}`).on('hidden.bs.toast', function() {
            $(this).remove();
        });

        // Announce to screen readers
        const announcement = $('<div>', {
            'aria-live': 'polite',
            'aria-atomic': 'true',
            'class': 'visually-hidden'
        }).text(message);
        
        $('body').append(announcement);
        setTimeout(() => announcement.remove(), 1000);
    },

    // Utility functions
    formatDate(date) {
        return date instanceof Date ? date.toISOString().split('T')[0] : date;
    },

    formatDisplayDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    },

    getDayName(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    },

    generateId() {
        return 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
};

// Make some functions globally accessible for inline event handlers
window.HolidayPlanner = HolidayPlanner;