// Theme toggle function
function toggleTheme() {
    const body = document.body;

    // Toggle classes for body to switch light/dark mode
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDarkMode);

    console.log("Theme switched. Dark mode:", isDarkMode);

    // Persist theme in localStorage (optional)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Load the saved theme when the page loads
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
};


// Language switch function
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (language === 'en') {
            element.textContent = english[key];
        } else {
            element.textContent = arabic[key];
        }
    });
}

// Product image modal
document.addEventListener('DOMContentLoaded', function () {
    const productImages = document.querySelectorAll('.product-item img');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalPrice = document.querySelector('.modal-price');
    const closeButton = document.querySelector('.close');

    productImages.forEach(image => {
        image.addEventListener('click', function () {
            const largeImage = image.getAttribute('data-large');
            const title = image.nextElementSibling.innerText;
            const description = image.nextElementSibling.nextElementSibling.innerText;
            modalImage.src = largeImage;
            modalTitle.innerText = title;
            modalDescription.innerText = description;
            modalPrice.innerText = "36.00dh"; // Example price
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Example translation dictionaries
const arabic = {
    'about-us-title': 'من نحن',
    'albahja-olives':'زيوت البهجة',
    'about-us-description': 'منذ عام 1994، وزيتون البهجة هو وجهتكم الموثوقة للحصول على أجود أنواع الزيتون، حيث نخدم بفخر مجتمع حي الحسناني النابض بالحياة. على مدار ما يقرب من ثلاثة عقود، بنينا سمعة كأفضل مصدر للزيتون الأصيل والنكهات الشهية التي تضفي البهجة على كل وجبة ,,باعتبارنا المزود رقم 1 للزيتون في حي الحسناني، نتخصص في مجموعة متنوعة من الزيتون، من الأسود والأخضر التقليدي إلى الأنواع المميز المتبلة والمحضرة. التزامنا بالجودة ورضا العملاء جعل اسمنا محبوبًا في الحي الحسني وما حوله,,,في زيتون البهجة، نؤمن بالحفاظ على التقاليد مع تقديم منتجات بأعلى جودة. سواءً كانت للسلطات أو الطاجين أو المناسبات الخاصة، ثقوا بنا لتقديم النكهات المثالية في كل مرة',

    'products-title': 'منتجاتنا',
    'golden-harvest-title': 'زيتون اسود طبيعي',
    'golden-harvest-description': 'غنية بالنكهة،ومملح طبيعي مثالية للفطور.',
    'classic-green-title': 'الأسود التقليدي',
    'classic-green-description': 'منتقى حديث .',
    'marinated-bliss-title': 'بهجة متبلة',
    'marinated-bliss-description': 'مغمور بالأعشاب والتوابل لنكهة جريئة.',
    'black-pearl-title': 'اللؤلؤة السوداء',
    'black-pearl-description': 'أنيقة وناعمة، طعم فاخر حقيقي.',
    'sun-kissed-olives-title': 'زيتون مشمس',
    'sun-kissed-olives-description': 'منقوع بعناية للحصول على نكهة غنية ومشمسة.'
};

const english = {
    'about-us-title': 'About Us',
    'albahja-olives':'albahja olives',
    'about-us-description': 'Albahja Olives is dedicated to providing the finest olives...',
    'products-title': 'Our Products',
    'golden-harvest-title': 'Golden Harvest',
    'golden-harvest-description': 'Rich in flavor, perfect for any occasion.',
    'classic-green-title': 'Classic Green',
    'classic-green-description': 'Freshly picked and naturally brined.',
    'marinated-bliss-title': 'Marinated Bliss',
    'marinated-bliss-description': 'Infused with herbs and spices for a bold taste.',
    'black-pearl-title': 'Black Pearl',
    'black-pearl-description': 'Elegant and smooth, a true delicacy.',
    'sun-kissed-olives-title': 'Sun-Kissed Olives',
    'sun-kissed-olives-description': 'Lovingly cured for a sunny, rich flavor.'
};
function setLanguage(language) {
    // Update global text content using data-lang attributes
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (language === 'en') {
            element.textContent = english[key];
        } else {
            element.textContent = arabic[key];
        }
    });

    // Update product titles and descriptions using data-* attributes
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        const titleElement = item.querySelector('h3');
        const descriptionElement = item.querySelector('p');

        if (language === 'en') {
            titleElement.textContent = titleElement.getAttribute('data-title-en');
            descriptionElement.textContent = descriptionElement.getAttribute('data-description-en');
        } else {
            titleElement.textContent = titleElement.getAttribute('data-title-ar');
            descriptionElement.textContent = descriptionElement.getAttribute('data-description-ar');
        }
    });
}



