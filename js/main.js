document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Menú Móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Cerrar menú móvil al hacer click en un enlace
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // 2. Gráfico de Habilidades con Chart.js
    const skillsCtx = document.getElementById('skillsChart');
    if (skillsCtx) {
        const ctx = skillsCtx.getContext('2d');
        
        // Colores temáticos
        const primaryColor = 'rgba(37, 99, 235, 0.8)';
        const primaryBorder = 'rgba(37, 99, 235, 1)';
        const textColor = '#57534e';
        const gridColor = 'rgba(0, 0, 0, 0.05)';

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'SAP Business One',
                    'MSSQL Server',
                    'C# (.NET)',
                    'Crystal Reports',
                    'Project Management',
                    'Inteligencia Artificial'
                ],
                datasets: [{
                    label: 'Nivel de Experiencia (%)',
                    data: [95, 90, 85, 88, 80, 85],
                    backgroundColor: primaryColor,
                    borderColor: primaryBorder,
                    borderWidth: 1,
                    borderRadius: 6,
                    barPercentage: 0.7
                }]
            },
            options: {
                indexAxis: 'y', // Gráfico horizontal
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1c1917',
                        titleFont: { family: 'Inter', size: 14 },
                        bodyFont: { family: 'Inter', size: 13 },
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: gridColor,
                            drawBorder: false
                        },
                        ticks: {
                            display: false // Ocultamos los números en X para un look más limpio
                        }
                    },
                    y: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: textColor,
                            font: {
                                family: 'Inter',
                                size: 13,
                                weight: 500
                            }
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // 3. Animaciones de Intersección (Fade In al hacer scroll)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima solo la primera vez
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // Mostrar el primer elemento inmediatamente si ya está visible
    if(fadeElements.length > 0) {
        fadeElements[0].classList.add('visible');
    }

    // 4. Actualizar Año del Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
