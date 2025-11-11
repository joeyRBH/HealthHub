// ==================== DOM Elements ====================

const menuItems = document.querySelectorAll('.menu-item');

const contentSections = document.querySelectorAll('.content-section');

const userMenu = document.querySelector('.user-menu');

const searchInputs = document.querySelectorAll('input[type="text"]');

 

// ==================== Navigation ====================

function initNavigation() {

    menuItems.forEach(item => {

        item.addEventListener('click', (e) => {

            e.preventDefault();

            const targetId = item.querySelector('a').getAttribute('href').substring(1);

 

            // Update active menu item

            menuItems.forEach(mi => mi.classList.remove('active'));

            item.classList.add('active');

 

            // Show corresponding content section

            contentSections.forEach(section => {

                section.classList.remove('active');

                if (section.id === targetId) {

                    section.classList.add('active');

                }

            });

 

            // Update URL hash

            window.location.hash = targetId;

        });

    });

}

 

// ==================== Initialize sections based on URL hash ====================

function initHashNavigation() {

    const hash = window.location.hash.substring(1);

    if (hash) {

        const targetSection = document.getElementById(hash);

        const targetMenuItem = document.querySelector(`a[href="#${hash}"]`)?.closest('.menu-item');

 

        if (targetSection && targetMenuItem) {

            contentSections.forEach(section => section.classList.remove('active'));

            menuItems.forEach(item => item.classList.remove('active'));

 

            targetSection.classList.add('active');

            targetMenuItem.classList.add('active');

        }

    }

}

 

// ==================== User Menu Dropdown ====================

function initUserMenu() {

    if (userMenu) {

        userMenu.addEventListener('click', (e) => {

            e.stopPropagation();

            alert('User menu clicked! Add dropdown functionality here.');

        });

    }

}

 

// ==================== Search Functionality ====================

function initSearch() {

    searchInputs.forEach(input => {

        input.addEventListener('focus', function() {

            this.parentElement.classList.add('focused');

        });

 

        input.addEventListener('blur', function() {

            this.parentElement.classList.remove('focused');

        });

 

        input.addEventListener('input', function() {

            const searchTerm = this.value.toLowerCase();

            // Add search logic here based on context

            console.log('Searching for:', searchTerm);

        });

    });

}

 

// ==================== Calendar Functionality ====================

function initCalendar() {

    const calendarViewBtns = document.querySelectorAll('.calendar-view-toggle .btn');

 

    calendarViewBtns.forEach(btn => {

        btn.addEventListener('click', function() {

            calendarViewBtns.forEach(b => b.classList.remove('active'));

            this.classList.add('active');

 

            const view = this.textContent.trim();

            console.log('Calendar view changed to:', view);

            // Add calendar view switching logic here

        });

    });

}

 

// ==================== Messaging Functionality ====================

function initMessaging() {

    const messageThreads = document.querySelectorAll('.message-thread');

 

    messageThreads.forEach(thread => {

        thread.addEventListener('click', function() {

            messageThreads.forEach(t => t.classList.remove('active'));

            this.classList.add('active');

 

            // Update conversation view

            const userName = this.querySelector('h4').textContent;

            console.log('Selected conversation with:', userName);

            // Add logic to load conversation messages

        });

    });

 

    // Send message functionality

    const conversationInput = document.querySelector('.conversation-input input');

    const sendButton = document.querySelector('.conversation-input .btn-primary');

 

    if (conversationInput && sendButton) {

        sendButton.addEventListener('click', sendMessage);

        conversationInput.addEventListener('keypress', function(e) {

            if (e.key === 'Enter') {

                sendMessage();

            }

        });

    }

}

 

function sendMessage() {

    const conversationInput = document.querySelector('.conversation-input input');

    const message = conversationInput.value.trim();

 

    if (message) {

        console.log('Sending message:', message);

 

        // Add message to conversation

        const messagesContainer = document.querySelector('.conversation-messages');

        const messageElement = createMessageElement(message, true);

        messagesContainer.appendChild(messageElement);

 

        // Clear input

        conversationInput.value = '';

 

        // Scroll to bottom

        messagesContainer.scrollTop = messagesContainer.scrollHeight;

 

        // Simulate response (for demo purposes)

        setTimeout(() => {

            const responseMessage = createMessageElement('Thank you for your message! I\'ll respond soon.', false);

            messagesContainer.appendChild(responseMessage);

            messagesContainer.scrollTop = messagesContainer.scrollHeight;

        }, 1500);

    }

}

 

function createMessageElement(text, isSent) {

    const messageDiv = document.createElement('div');

    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;

 

    const now = new Date();

    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

 

    messageDiv.innerHTML = `

        ${!isSent ? '<img src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=E3F2FD&color=1976D2" alt="Sarah Johnson">' : ''}

        <div class="message-bubble">

            <p>${text}</p>

            <span class="message-time">${timeStr}</span>

        </div>

    `;

 

    return messageDiv;

}

 

// ==================== Filter Buttons ====================

function initFilters() {

    const filterButtons = document.querySelectorAll('.filter-btn');

 

    filterButtons.forEach(btn => {

        btn.addEventListener('click', function() {

            const parentFilters = this.parentElement.querySelectorAll('.filter-btn');

            parentFilters.forEach(b => b.classList.remove('active'));

            this.classList.add('active');

 

            console.log('Filter selected:', this.textContent);

            // Add filtering logic here

        });

    });

}

 

// ==================== Quick Actions ====================

function initQuickActions() {

    const actionButtons = document.querySelectorAll('.action-btn');

 

    actionButtons.forEach(btn => {

        btn.addEventListener('click', function() {

            const action = this.querySelector('span').textContent;

            console.log('Quick action:', action);

            alert(`${action} clicked! Add functionality here.`);

        });

    });

}

 

// ==================== Appointment Actions ====================

function initAppointmentActions() {

    const appointmentButtons = document.querySelectorAll('.appointment-actions .btn');

 

    appointmentButtons.forEach(btn => {

        btn.addEventListener('click', function(e) {

            e.stopPropagation();

            const action = this.textContent.trim();

            const appointmentItem = this.closest('.appointment-item');

            const clientName = appointmentItem.querySelector('h4').textContent;

 

            console.log(`${action} appointment with ${clientName}`);

 

            if (action === 'Join') {

                alert(`Joining video call with ${clientName}...`);

            } else {

                alert(`Viewing details for ${clientName}...`);

            }

        });

    });

}

 

// ==================== Table Actions ====================

function initTableActions() {

    const tableActionButtons = document.querySelectorAll('.data-table .btn-icon');

 

    tableActionButtons.forEach(btn => {

        btn.addEventListener('click', function(e) {

            e.stopPropagation();

            const row = this.closest('tr');

            const clientName = row.querySelector('.client-name span').textContent;

            const icon = this.querySelector('i');

 

            if (icon.classList.contains('fa-eye')) {

                console.log('View client:', clientName);

                alert(`Viewing ${clientName}'s profile...`);

            } else if (icon.classList.contains('fa-edit')) {

                console.log('Edit client:', clientName);

                alert(`Editing ${clientName}'s information...`);

            } else if (icon.classList.contains('fa-envelope')) {

                console.log('Message client:', clientName);

                alert(`Sending message to ${clientName}...`);

            }

        });

    });

}

 

// ==================== Notification Buttons ====================

function initNotifications() {

    const notificationBtn = document.querySelector('.nav-btn[title="Notifications"]');

    const messageBtn = document.querySelector('.nav-btn[title="Messages"]');

 

    if (notificationBtn) {

        notificationBtn.addEventListener('click', function() {

            console.log('Notifications clicked');

            alert('Notifications panel - Add dropdown here!');

        });

    }

 

    if (messageBtn) {

        messageBtn.addEventListener('click', function() {

            console.log('Messages clicked');

            alert('Messages panel - Add dropdown here!');

        });

    }

}

 

// ==================== Reminders ====================

function initReminders() {

    const reminderCheckboxes = document.querySelectorAll('.reminder-item input[type="checkbox"]');

 

    reminderCheckboxes.forEach(checkbox => {

        checkbox.addEventListener('change', function() {

            const label = this.nextElementSibling;

            if (this.checked) {

                label.style.textDecoration = 'line-through';

                label.style.opacity = '0.6';

                console.log('Task completed:', label.textContent);

            } else {

                label.style.textDecoration = 'none';

                label.style.opacity = '1';

            }

        });

    });

}

 

// ==================== Calendar Navigation ====================

function initCalendarNavigation() {

    const prevBtn = document.querySelector('.calendar-header .btn:first-child');

    const nextBtn = document.querySelector('.calendar-header .btn:nth-child(3)');

 

    if (prevBtn) {

        prevBtn.addEventListener('click', function() {

            console.log('Previous month');

            // Add logic to navigate to previous month

        });

    }

 

    if (nextBtn) {

        nextBtn.addEventListener('click', function() {

            console.log('Next month');

            // Add logic to navigate to next month

        });

    }

}

 

// ==================== Mobile Menu Toggle ====================

function initMobileMenu() {

    // Add hamburger menu for mobile

    const navbar = document.querySelector('.navbar-container');

    const sidebar = document.querySelector('.sidebar');

 

    // Create mobile menu button

    const mobileMenuBtn = document.createElement('button');

    mobileMenuBtn.className = 'mobile-menu-btn';

    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    mobileMenuBtn.style.display = 'none';

 

    if (navbar && sidebar) {

        navbar.insertBefore(mobileMenuBtn, navbar.firstChild);

 

        mobileMenuBtn.addEventListener('click', function() {

            sidebar.classList.toggle('mobile-open');

            document.body.classList.toggle('sidebar-open');

        });

 

        // Show mobile menu button on small screens

        if (window.innerWidth <= 992) {

            mobileMenuBtn.style.display = 'block';

        }

 

        window.addEventListener('resize', function() {

            if (window.innerWidth <= 992) {

                mobileMenuBtn.style.display = 'block';

            } else {

                mobileMenuBtn.style.display = 'none';

                sidebar.classList.remove('mobile-open');

                document.body.classList.remove('sidebar-open');

            }

        });

    }

}

 

// ==================== Real-time Clock ====================

function initClock() {

    // Add a clock to the dashboard if desired

    setInterval(() => {

        const now = new Date();

        // Update any time-sensitive UI elements

    }, 60000); // Update every minute

}

 

// ==================== Smooth Scrolling ====================

function initSmoothScrolling() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            const href = this.getAttribute('href');

            if (href !== '#' && href.length > 1) {

                const target = document.querySelector(href);

                if (target && target.scrollIntoView) {

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: 'smooth',

                        block: 'start'

                    });

                }

            }

        });

    });

}

 

// ==================== Demo Data Generator ====================

function generateDemoData() {

    console.log('HealthHub Practice Management System loaded!');

    console.log('Demo mode active - all data is simulated');

}

 

// ==================== Keyboard Shortcuts ====================

function initKeyboardShortcuts() {

    document.addEventListener('keydown', function(e) {

        // Ctrl/Cmd + K for search

        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {

            e.preventDefault();

            const searchInput = document.querySelector('.navbar-search input');

            if (searchInput) {

                searchInput.focus();

            }

        }

 

        // Escape to close modals/overlays

        if (e.key === 'Escape') {

            // Close any open modals

            console.log('Escape pressed - close modals');

        }

    });

}

 

// ==================== Tooltips ====================

function initTooltips() {

    const tooltipElements = document.querySelectorAll('[title]');

 

    tooltipElements.forEach(element => {

        element.addEventListener('mouseenter', function(e) {

            const title = this.getAttribute('title');

            if (title) {

                // Create tooltip element

                const tooltip = document.createElement('div');

                tooltip.className = 'custom-tooltip';

                tooltip.textContent = title;

                tooltip.style.cssText = `

                    position: fixed;

                    background: rgba(0, 0, 0, 0.8);

                    color: white;

                    padding: 6px 12px;

                    border-radius: 4px;

                    font-size: 12px;

                    z-index: 10000;

                    pointer-events: none;

                `;

 

                document.body.appendChild(tooltip);

 

                const rect = this.getBoundingClientRect();

                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';

                tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';

 

                this._tooltip = tooltip;

            }

        });

 

        element.addEventListener('mouseleave', function() {

            if (this._tooltip) {

                this._tooltip.remove();

                this._tooltip = null;

            }

        });

    });

}

 

// ==================== Loading State ====================

function showLoading() {

    // Add loading spinner overlay if needed

    console.log('Loading...');

}

 

function hideLoading() {

    // Remove loading spinner

    console.log('Loading complete');

}

 

// ==================== Initialize Everything ====================

function init() {

    console.log('Initializing HealthHub Practice Management System...');

 

    // Core functionality

    initNavigation();

    initHashNavigation();

    initUserMenu();

    initSearch();

 

    // Feature-specific

    initCalendar();

    initCalendarNavigation();

    initMessaging();

    initFilters();

    initQuickActions();

    initAppointmentActions();

    initTableActions();

    initNotifications();

    initReminders();

 

    // UI enhancements

    initMobileMenu();

    initClock();

    initSmoothScrolling();

    initKeyboardShortcuts();

    initTooltips();

 

    // Demo data

    generateDemoData();

 

    console.log('✓ HealthHub initialized successfully!');

}

 

// ==================== Wait for DOM to be ready ====================

if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', init);

} else {

    init();

}

 

// ==================== Export for use in other files ====================

window.HealthHub = {

    sendMessage,

    showLoading,

    hideLoading

};

 
