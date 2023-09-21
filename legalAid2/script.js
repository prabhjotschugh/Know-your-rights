document.addEventListener("DOMContentLoaded", function () {
    const lawyersData = [
            { 
                name: 'Rahul Sharma',
                specialization: 'Family law',
                experience: '2+ years',
                contact: { phone: '123-456-7890', email: 'rahul@example.com' },
                image: 'static/1.jpeg',
                casesWon: '50+',
                consultationFees: '₹1000'
            },
            { 
                name: 'Priya Gupta',
                specialization: 'Family law',
                experience: '4+ years',
                contact: { phone: '234-567-8901' , email: 'priya@example.com'},
                image: 'static/2.jpeg',
                casesWon: '30+',
                consultationFees: '₹800'
            },
            { 
                name: 'Rani Patel',
                specialization: 'Property law',
                experience: '4+ years',
                contact: { phone: '345-678-9012' , email: 'rani@example.com'},
                image: 'static/3.jpg',
                casesWon: '40+',
                consultationFees: '₹900'
            },
            { 
                name: 'Amit Kumar',
                specialization: 'Property law',
                experience: '6+ years',
                contact: { phone: '456-789-0123' , email: 'amit@example.com'},
                image: 'static/4.jpg',
                casesWon: '55+',
                consultationFees: '₹1200'
            },
            { 
                name: 'Neha Singh',
                specialization: 'Property law',
                experience: '3+ years',
                contact: { phone: '567-890-1234' , email: 'neha@example.com'},
                image: 'static/5.jpeg',
                casesWon: '25+',
                consultationFees: '₹700'
            },
            { 
                name: 'Sanjay Verma',
                specialization: 'Criminal law',
                experience: '7+ years',
                contact: { phone: '678-901-2345' , email: 'sanjay@example.com'},
                image: 'static/6.jpg',
                casesWon: '75+',
                consultationFees: '₹1500'
            },
            { 
                name: 'Arun Sharma',
                specialization: 'Criminal law',
                experience: '9+ years',
                contact: { phone: '789-012-3456' , email: 'arun@example.com'},
                image: 'static/7.jpg',
                casesWon: '100+',
                consultationFees: '₹2000'
            },
            { 
                name: 'Rajesh Gupta',
                specialization: 'Criminal law',
                experience: '2+ years',
                contact: { phone: '890-123-4567' , email: 'rajesh_gupta@example.com'},
                image: 'static/8.jpeg',
                casesWon: '20+',
                consultationFees: '₹600'
            },
            { 
                name: 'Mohan Singh',
                specialization: 'Criminal law',
                experience: '4+ years',
                contact: { phone: '901-234-5678' , email: 'mohan@example.com'},
                image: 'static/9.jpeg',
                casesWon: '45+',
                consultationFees: '₹1000'
            },
            { 
                name: 'Vikas Yadav',
                specialization: 'Labour law',
                experience: '2+ years',
                contact: { phone: '012-345-6789' , email: 'vikas@example.com'},
                image: 'static/10.jpeg',
                casesWon: '15+',
                consultationFees: '₹500'
            },
            { 
                name: 'Anjali Dubey',
                specialization: 'Labour law',
                experience: '5+ years',
                contact: { phone: '123-456-7890', email: 'anjali@example.com' },
                image: 'static/11.jpeg',
                casesWon: '35+',
                consultationFees: '₹750'
            },
            { 
                name: 'Deepak Sharma',
                specialization: 'Labour law',
                experience: '4+ years',
                contact: { phone: '234-567-8901' , email: 'deepak@example.com'},
                image: 'static/12.jpeg',
                casesWon: '30+',
                consultationFees: '₹700'
            },
            { 
                name: 'Vijay Kumar',
                specialization: 'Labour law',
                experience: '9+ years',
                contact: { phone: '345-678-9012', email: 'vijay@example.com' },
                image: 'static/13.jpeg',
                casesWon: '80+',
                consultationFees: '₹1600'
            },
            { 
                name: 'Sunita Gupta',
                specialization: 'Traffic law',
                experience: '2+ years',
                contact: { phone: '456-789-0123' , email: 'sunita@example.com'},
                image: 'static/14.jpg',
                casesWon: '20+',
                consultationFees: '₹600'
            },
            { 
                name: 'Rakesh Yadav',
                specialization: 'Traffic law',
                experience: '4+ years',
                contact: { phone: '567-890-1234', email: 'rakesh@example.com' },
                image: 'static/15.jpeg',
                casesWon: '40+',
                consultationFees: '₹900'
            },
            { 
                name: 'Kavita Sharma',
                specialization: 'Traffic law',
                experience: '4+ years',
                contact: { phone: '678-901-2345' , email: 'kavita@example.com'},
                image: 'static/16.jpeg',
                casesWon: '35+',
                consultationFees: '₹800'
            },
            { 
                name: 'Rajesh Patel',
                specialization: 'Consumer law',
                experience: '3+ years',
                contact: { phone: '789-012-3456' , email: 'rajesh@example.com'},
                image: 'static/17.jpg',
                casesWon: '25+',
                consultationFees: '₹700'
            },
            { 
                name: 'Sarita Kumari',
                specialization: 'Consumer law',
                experience: '6+ years',
                contact: { phone: '890-123-4567' , email: 'sarita@example.com'},
                image: 'static/18.jpg',
                casesWon: '50+',
                consultationFees: '₹1000'
            },
            { 
                name: 'Alok Tiwari',
                specialization: 'Education law',
                experience: '9+ years',
                contact: { phone: '901-234-5678' , email: 'alok@example.com'},
                image: 'static/19.jpg',
                casesWon: '70+',
                consultationFees: '₹1200'
            },
            { 
                name: 'Shikha Verma',
                specialization: 'Education law',
                experience: '3+ years',
                contact: { phone: '012-345-6789' , email: 'shikha@example.com'},
                image: 'static/20.jpeg',
                casesWon: '15+',
                consultationFees: '₹500'
            }
    ];
    
    function createLawyerCard(lawyer) {
        const card = document.createElement('div');
        card.classList.add('lawyer-card');
        card.innerHTML = `
            <div class="lawyer-image-container">
                <img src="${lawyer.image}" alt="${lawyer.name}" class="lawyer-image">
            </div>
            <h3>${lawyer.name}</h3>
            <p><b>Specialization:</b> ${lawyer.specialization}</p>
            <p><b>Experience:</b> ${lawyer.experience}</p>
            <button class="contact-btn" data-lawyer='${JSON.stringify(lawyer)}'>Contact</button>
        `;
        
        return card;
    }

    function filterLawyers(specialization) {
        const lawyerCardsContainer = document.getElementById('lawyer-cards');
        lawyerCardsContainer.innerHTML = '';

        if (specialization === 'all') {
            lawyersData.forEach((lawyer) => {
                lawyerCardsContainer.appendChild(createLawyerCard(lawyer));
            });
        } else {
            const filteredLawyers = lawyersData.filter((lawyer) => lawyer.specialization === specialization);
            filteredLawyers.forEach((lawyer) => {
                lawyerCardsContainer.appendChild(createLawyerCard(lawyer));
            });
        }
        attachContactButtonListeners();
        updateFilterDescription(specialization); // Update filter description
    }

    function handleContactClick(lawyer) {
        const modal = document.getElementById('contact-modal');
        const modalContent = document.getElementById('contact-info');
        
        const modalHTML = `
            <div class="lawyer-details">
                <div class="lawyer-image-container">
                    <img src="${lawyer.image}" alt="${lawyer.name}" class="lawyer-image">
                </div>
                <h3>${lawyer.name}</h3>
                <p><b>Specialization:</b> ${lawyer.specialization}</p>
                <p><b>Experience:</b> ${lawyer.experience}</p>
                <p><b>Cases Won:</b> ${lawyer.casesWon}</p>
                <p><b>Consultation Fees:</b> ${lawyer.consultationFees}</p>
                <p><b>Phone:</b> ${lawyer.contact.phone}</p>
                <p><b>Email:</b> ${lawyer.contact.email || 'Not available'}</p>
            </div>
        `;
        modalContent.innerHTML = modalHTML;
        modal.style.display = 'block';
    }

    // Function to attach click event listeners to contact buttons
    function attachContactButtonListeners() {
        const contactButtons = document.querySelectorAll('.contact-btn');
        contactButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const lawyerData = JSON.parse(button.getAttribute('data-lawyer'));
                handleContactClick(lawyerData);
            });
        });
    }

    // Function to update the filter description text
    function updateFilterDescription(specialization) {
        const filterDescription = document.getElementById('filter-description');
        filterDescription.classList.add('filter-description');
        switch (specialization) {
            case 'Family law':
                filterDescription.textContent = 'Family law lawyers specialize in legal matters related to families. They handle cases such as divorce, child custody, spousal support, and adoption. These attorneys work to ensure the best interests of family members, helping to resolve disputes and legal issues that arise within families.';
                break;
            case 'Property law':
                filterDescription.textContent = 'Property law attorneys deal with issues surrounding real estate and property ownership. They assist clients in buying, selling, and managing properties, resolving disputes related to land and real estate, and drafting contracts and leases to protect property rights.';
                break;
            case 'Criminal law':
                filterDescription.textContent = 'Criminal law lawyers focus on defending individuals accused of committing crimes. They work to protect the rights of the accused and ensure a fair legal process. They handle cases ranging from minor infractions to serious felonies, providing legal representation and guidance throughout the criminal justice system.';
                break;
            case 'Labour law':
                filterDescription.textContent = 'Labour law attorneys specialize in matters related to employment and labor rights. They help employees and employers navigate employment contracts, workplace disputes, wage and hour issues, and employment discrimination cases. These lawyers ensure fair and lawful treatment in the workplace.';
                break;
            case 'Traffic law':
                filterDescription.textContent = 'Traffic law lawyers handle cases related to traffic violations and road safety. They assist clients in dealing with traffic tickets, license suspensions, and accidents. They work to protect driving privileges and minimize the impact of traffic violations on individuals\' records and insurance premiums.';
                break;
            case 'Consumer law':
                filterDescription.textContent = 'Consumer law attorneys advocate for consumer rights and protection. They handle cases involving consumer fraud, product defects, deceptive business practices, and unfair debt collection. They work to ensure that consumers are treated fairly and have legal recourse when facing unfair treatment.';
                break;
            case 'Education law':
                filterDescription.textContent = 'Education law lawyers specialize in matters related to educational institutions and students\' rights. They handle cases involving school discipline, special education, student privacy, and educational policy. They work to uphold the rights and interests of students and educational institutions.';
                break;
            default:
                filterDescription.textContent = '';
                break;
        }
    }
    

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const specialization = button.getAttribute('data-specialization');
            filterLawyers(specialization);
        });
    });

    const closeModalButton = document.getElementById('close-modal');
    closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('contact-modal');
        modal.style.display = 'none';
    });

    filterLawyers('all'); // Initial filter for showing all lawyers
});