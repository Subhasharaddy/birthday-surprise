document.addEventListener('DOMContentLoaded', () => {
    // 1. Apply Theme Colors (Now using new Red & Gold defaults if matching, otherwise uses config)
    if (CONFIG.colors) {
        document.documentElement.style.setProperty('--celebration-red', CONFIG.colors.primary);
        document.documentElement.style.setProperty('--gold', CONFIG.colors.secondary);
        document.documentElement.style.setProperty('--burgundy', CONFIG.colors.backgroundStart);
        document.documentElement.style.setProperty('--romantic-red', CONFIG.colors.backgroundEnd);
        document.documentElement.style.setProperty('--cream', CONFIG.colors.text);
    }

    // 2. Inject Config Data
    const titleText = CONFIG.landing.title.replace('{name}', CONFIG.recipientName);
    document.getElementById('landing-title').innerText = titleText;
    document.getElementById('landing-subtitle').innerText = CONFIG.landing.subtitle;
    
    document.getElementById('message-title').innerText = CONFIG.message.title;
    const messageContent = document.getElementById('message-content');
    CONFIG.message.content.forEach(paragraph => {
        const p = document.createElement('p');
        p.innerText = paragraph;
        messageContent.appendChild(p);
    });
    document.getElementById('message-signature').innerText = `${CONFIG.message.signature} ${CONFIG.senderName}`;
    
    document.getElementById('memories-title').innerText = CONFIG.memories.title;
    const galleryContainer = document.getElementById('gallery-container');
    CONFIG.memories.photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card reveal';
        card.innerHTML = `
            <div class="memory-img-container">
                <span class="placeholder-icon">📷</span>
                <img src="${photo.path}" alt="Memory ${index + 1}" onerror="this.style.opacity='0'" data-index="${index}">
            </div>
            <div class="memory-caption">${photo.caption}</div>
        `;
        
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            if (img.style.opacity !== '0' && img.complete && img.naturalWidth !== 0) {
                openLightbox(index);
            }
        });
        galleryContainer.appendChild(card);
    });

    document.getElementById('reasons-title').innerText = CONFIG.reasons.title;
    const reasonsContainer = document.getElementById('reasons-container');
    const icons = ['❤️', '✨', '🌟', '💖', '🎉', '🎁'];
    CONFIG.reasons.items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card reveal';
        card.innerHTML = `
            <div class="reason-icon">${icons[index % icons.length]}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        reasonsContainer.appendChild(card);
    });

    document.getElementById('footer-name').innerText = CONFIG.recipientName;
    
    document.getElementById('final-heading').innerText = `Happy Birthday, ${CONFIG.recipientName}!`;
    document.getElementById('final-message').innerText = "May your life always be filled with happiness, wonderful memories, unexpected blessings, and countless reasons to smile.";

    // 3. Landing Page Logic
    const surpriseBtn = document.getElementById('surprise-btn');
    const landingPage = document.getElementById('landing-page');
    const mainExperience = document.getElementById('main-experience');

    surpriseBtn.addEventListener('click', () => {
        landingPage.classList.add('fade-out');
        setTimeout(() => {
            landingPage.classList.add('hidden');
            mainExperience.classList.remove('hidden');
            fireCelebration();
            initScrollAnimations();
        }, 1000);
    });

    // 4. Confetti & Particles
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    let animationId;
    
    // Rich Red & Gold confetti palette
    const confettiColors = ['#F02D3A', '#FFD166', '#FFE4EC', '#C1121F', '#ffffff'];

    function createConfetti(amount = 150) {
        for (let i = 0; i < amount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 6 + 2,
                dx: Math.random() * 4 - 2,
                dy: Math.random() * 5 + 2,
                color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                tilt: Math.random() * 10 - 10,
                tiltAngleIncrement: (Math.random() * 0.07) + 0.05,
                tiltAngle: 0,
                shape: Math.random() > 0.5 ? 'circle' : 'rect'
            });
        }
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let activeParticles = 0;
        
        particles.forEach((p, index) => {
            if (p.y < canvas.height) activeParticles++;
            
            p.tiltAngle += p.tiltAngleIncrement;
            p.y += p.dy;
            p.x += Math.sin(p.tiltAngle) * 2 + p.dx;

            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.fillStyle = p.color;
            
            if (p.shape === 'circle') {
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.moveTo(p.x + p.tilt + p.r, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
                ctx.stroke();
            }
        });

        if (activeParticles > 0) {
            animationId = requestAnimationFrame(drawConfetti);
        } else {
            particles = [];
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    function startConfetti(amount = 150) {
        if(animationId) cancelAnimationFrame(animationId);
        particles = [];
        createConfetti(amount);
        drawConfetti();
    }

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Background Particles (Hearts & Stars)
    const bgParticlesContainer = document.getElementById('particles-container');
    const particleTypes = ['❤️', '✨', '⭐'];
    function createBgParticles() {
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        bgParticlesContainer.innerHTML = '';
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.innerText = particleTypes[Math.floor(Math.random() * particleTypes.length)];
            p.style.left = `${Math.random() * 100}vw`;
            p.style.fontSize = `${Math.random() * 15 + 10}px`;
            p.style.animationDuration = `${Math.random() * 15 + 10}s`;
            p.style.animationDelay = `${Math.random() * 10}s`;
            bgParticlesContainer.appendChild(p);
        }
    }
    createBgParticles();

    function fireCelebration() {
        startConfetti(200);
        // create heart burst safely without overloading
        for(let i=0; i<10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerText = '❤️';
                heart.style.position = 'fixed';
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.bottom = '-50px';
                heart.style.fontSize = `${Math.random() * 30 + 20}px`;
                heart.style.zIndex = '99';
                heart.style.transition = 'all 3s ease-out';
                heart.style.pointerEvents = 'none';
                document.body.appendChild(heart);
                
                requestAnimationFrame(() => {
                    heart.style.transform = `translateY(-120vh) rotate(${Math.random()*360}deg)`;
                    heart.style.opacity = '0';
                });
                
                setTimeout(() => heart.remove(), 3000);
            }, i * 150);
        }
    }

    // 5. Countdown Logic
    const targetDate = new Date(CONFIG.countdown.targetDate).getTime();
    const timerElement = document.getElementById('timer');
    const celebrationMessage = document.getElementById('celebration-message');
    const countdownHeading = document.getElementById('countdown-heading');
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            timerElement.classList.add('hidden');
            celebrationMessage.innerText = CONFIG.countdown.celebrationMessage;
            celebrationMessage.classList.remove('hidden');
            countdownHeading.innerText = "It's Time to Celebrate! 🎉";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    const makeWishBtn = document.getElementById('make-wish-btn');
    makeWishBtn.addEventListener('click', () => {
        fireCelebration();
        makeWishBtn.innerText = "Wish Granted ✨";
        makeWishBtn.style.pointerEvents = 'none';
        makeWishBtn.style.opacity = '0.8';
        setTimeout(() => {
            makeWishBtn.innerText = "Make a Wish 🎂";
            makeWishBtn.style.pointerEvents = 'auto';
            makeWishBtn.style.opacity = '1';
        }, 5000);
    });

    // 6. Envelope Logic
    const envelope = document.getElementById('envelope');
    let isOpen = false;
    
    envelope.addEventListener('click', (e) => {
        if (isOpen && e.target.closest('.letter') && !e.target.closest('.letter h2') && !e.target.closest('.signature')) {
           return; 
        }

        if (!isOpen) {
            envelope.classList.add('open');
            setTimeout(() => {
                envelope.classList.add('fullscreen-letter');
            }, 800);
            isOpen = true;
        } else {
            envelope.classList.remove('fullscreen-letter');
            setTimeout(() => {
                envelope.classList.remove('open');
            }, 500);
            isOpen = false;
        }
    });

    // 7. Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    let currentPhotoIndex = 0;

    function openLightbox(index) {
        currentPhotoIndex = index;
        updateLightbox();
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function updateLightbox() {
        const photo = CONFIG.memories.photos[currentPhotoIndex];
        lightboxImg.src = photo.path;
        lightboxCaption.innerText = photo.caption;
    }

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
    
    document.getElementById('lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentPhotoIndex = (currentPhotoIndex - 1 + CONFIG.memories.photos.length) % CONFIG.memories.photos.length;
        updateLightbox();
    });
    
    document.getElementById('lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.memories.photos.length;
        updateLightbox();
    });

    // 8. Scroll Animations
    function initScrollAnimations() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(reveal => {
            observer.observe(reveal);
        });
    }

    // 9. Final Celebrate Button
    document.getElementById('celebrate-again-btn').addEventListener('click', () => {
        fireCelebration();
    });
    document.getElementById('celebrate-again-container').addEventListener('click', () => {
        fireCelebration();
    });

    // 10. Audio Controls
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const musicText = document.getElementById('music-text');
    const bgMusic = document.getElementById('bg-music');
    const musicFeedback = document.getElementById('music-feedback');
    let isPlaying = false;
    
    const playSvg = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 5px;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    const pauseSvg = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align: middle; margin-right: 5px;"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';

    function showMusicFeedback(message) {
        if (!musicFeedback) return;
        musicFeedback.innerText = message;
        musicFeedback.classList.remove('hidden');
        setTimeout(() => {
            musicFeedback.classList.add('hidden');
        }, 4000);
    }

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            if (musicIcon) musicIcon.innerHTML = playSvg;
            if (musicText) musicText.innerText = "Play Music";
        } else {
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    if (musicIcon) musicIcon.innerHTML = pauseSvg;
                    if (musicText) musicText.innerText = "Pause Music";
                }).catch(e => {
                    isPlaying = false;
                    if (musicIcon) musicIcon.innerHTML = playSvg;
                    if (musicText) musicText.innerText = "Play Music";
                    showMusicFeedback("Audio file is missing or cannot be played.");
                    console.log("Audio play error:", e);
                });
            }
        }
    });
});
