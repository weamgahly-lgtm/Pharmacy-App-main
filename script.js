document.addEventListener('DOMContentLoaded', function () {
    
    // ==========================================
    // 1. كود الـ Navbar (اللي إنت كاتبه)
    // ==========================================
    const navItems = document.querySelectorAll(".bottom-nav .nav-item");
    const pages = document.querySelectorAll(".page-content");

    navItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            // إزالة التفعيل من كل الأزرار
            navItems.forEach(function (nav) {
                nav.classList.remove("active");
            });

            // إزالة التفعيل من كل الصفحات
            pages.forEach(function (page) {
                page.classList.remove("active");
            });

            // تفعيل الزر المفغوط
            this.classList.add("active");

            // تحديد الصفحة المطلوبة
            const targetId = this.getAttribute("data-target");
            const targetPage = document.getElementById(targetId);

            // إظهار الصفحة
            if (targetPage) {
                targetPage.classList.add("active");
                window.scrollTo(0, 0);
            }
        });
    });

    // ==========================================
    // 2. كود فتح صفحة تفاصيل المنتج (لما تدوس على المربع)
    // ==========================================
    const clickableCards = document.querySelectorAll(".clickable-card");
    const detailsPage = document.getElementById("product-details-page");

    clickableCards.forEach(function (card) {
        card.addEventListener("click", function () {
            // إخفاء كل الصفحات
            pages.forEach(function (page) {
                page.classList.remove("active");
            });
            
            // إظهار صفحة التفاصيل
            if (detailsPage) {
                detailsPage.classList.add("active");
                window.scrollTo(0, 0);
            }
        });
    });

    // ==========================================
    // 3. كود زراير الزيادة والنقصان (+ و -)
    // ==========================================
    const plusBtn = document.getElementById("plus-btn");
    const minusBtn = document.getElementById("minus-btn");
    const qtyCount = document.getElementById("qty-count");

    if (plusBtn && minusBtn && qtyCount) {
        let count = 1;
        
        plusBtn.addEventListener("click", function() {
            count++;
            qtyCount.textContent = count;
        });

        minusBtn.addEventListener("click", function() {
            if (count > 1) {
                count--;
                qtyCount.textContent = count;
            }
        });
    }

}); // قفلة الـ DOMContentLoaded

    // كود فتح صفحة الفيتامين
    const vitaminCard = document.querySelector(".vitamin-card");
    const vitaminPage = document.getElementById("vitamin-details-page");
    const plusBtnVit = document.getElementById("plus-btn-vit");
    const minusBtnVit = document.getElementById("minus-btn-vit");
    const qtyCountVit = document.getElementById("qty-count-vit");

    if (vitaminCard && vitaminPage) {
        vitaminCard.addEventListener("click", function () {
            // إخفاء كل الصفحات
            const allPages = document.querySelectorAll(".page-content");
            allPages.forEach(page => page.classList.remove("active"));
            
            // إظهار صفحة الفيتامين
            vitaminPage.classList.add("active");
            window.scrollTo(0, 0);
        });
    }

    // زراير الكمية بتاعة الفيتامين
    if (plusBtnVit && minusBtnVit && qtyCountVit) {
        let vitCount = 1;
        
        plusBtnVit.addEventListener("click", function() {
            vitCount++;
            qtyCountVit.textContent = vitCount;
        });
        
        minusBtnVit.addEventListener("click", function() {
            if (vitCount > 1) {
                vitCount--;
                qtyCountVit.textContent = vitCount;
            }
        });
    }


    // كود فتح صفحة الترمومتر
    const thermometerCard = document.querySelector(".thermometer-card");
    const thermometerPage = document.getElementById("thermometer-details-page");
    const plusBtnThermo = document.getElementById("plus-btn-thermo");
    const minusBtnThermo = document.getElementById("minus-btn-thermo");
    const qtyCountThermo = document.getElementById("qty-count-thermo");

    if (thermometerCard && thermometerPage) {
        thermometerCard.addEventListener("click", function () {
            // إخفاء كل الصفحات
            const allPages = document.querySelectorAll(".page-content");
            allPages.forEach(page => page.classList.remove("active"));
            
            // إظهار صفحة الترمومتر
            thermometerPage.classList.add("active");
            window.scrollTo(0, 0);
        });
    }

    // زراير الكمية بتاعة الترمومتر
    if (plusBtnThermo && minusBtnThermo && qtyCountThermo) {
        let thermoCount = 1;
        
        plusBtnThermo.addEventListener("click", function() {
            thermoCount++;
            qtyCountThermo.textContent = thermoCount;
        });
        
        minusBtnThermo.addEventListener("click", function() {
            if (thermoCount > 1) {
                thermoCount--;
                qtyCountThermo.textContent = thermoCount;
            }
        });
    }

        // كود فتح صفحة غسول الوجه
    const washCard = document.querySelector(".wash-card");
    const washPage = document.getElementById("wash-details-page");
    const plusBtnWash = document.getElementById("plus-btn-wash");
    const minusBtnWash = document.getElementById("minus-btn-wash");
    const qtyCountWash = document.getElementById("qty-count-wash");

    if (washCard && washPage) {
        washCard.addEventListener("click", function () {
            // إخفاء كل الصفحات
            const allPages = document.querySelectorAll(".page-content");
            allPages.forEach(page => page.classList.remove("active"));
            
            // إظهار صفحة الغسول
            washPage.classList.add("active");
            window.scrollTo(0, 0);
        });
    }

    // زراير الكمية بتاعة الغسول
    if (plusBtnWash && minusBtnWash && qtyCountWash) {
        let washCount = 1;
        
        plusBtnWash.addEventListener("click", function() {
            washCount++;
            qtyCountWash.textContent = washCount;
        });
        
        minusBtnWash.addEventListener("click", function() {
            if (washCount > 1) {
                washCount--;
                qtyCountWash.textContent = washCount;
            }
        });
    }



        // ==========================================
    // كود سلة المشتريات
    // ==========================================
    
    // مصفوفة عشان نخزن فيها المنتجات
    let cart = [];

function addToCart(name, price, emoji, qty = 1) {
    // 1. نشوف الأول هل المنتج ده موجود في السلة ولا لأ
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // لو موجود، نزود الكمية بتاعته بس
        existingItem.qty += qty;
    } else {
        // لو مش موجود، نضيفه كمنتج جديد
        cart.push({ name: name, price: price, emoji: emoji, qty: qty });
    }
    
    // بنحدث شكل السلة
    updateCartUI();
        
        // بننقل المستخدم لصفحة السلة
        const allPages = document.querySelectorAll(".page-content");
        allPages.forEach(page => page.classList.remove("active"));
        
        const cartPage = document.getElementById("cart-page");
        if (cartPage) {
            cartPage.classList.add("active");
            window.scrollTo(0, 0);
        }

        // بنفعل زرار السلة في الـ Nav
        const navItems = document.querySelectorAll(".bottom-nav .nav-item");
        navItems.forEach(nav => nav.classList.remove("active"));
        const cartNavItem = document.querySelector('[data-target="cart-page"]')
        if(cartNavItem) cartNavItem.classList.add("active");
    }

function updateCartUI() {
    const container = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total");
    
    if (!container) return; 

    container.innerHTML = ""; 
    let subtotal = 0;

    cart.forEach((item) => {
        // هنا بنضرب سعر المنتج في الكمية اللي إختارها
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal; 
        
        const itemHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; background: #152420; padding: 15px; border-radius: 10px; margin-bottom: 10px; border: 1px solid #203530;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 24px;">${item.emoji}</span>
                    <div>
                        <h4 style="margin: 0; color: white;">${item.name}</h4>
                        <span style="color: #8da49c; font-size: 14px;">الكمية: ${item.qty}</span>
                    </div>
                </div>
                <div style="color: #1eb992; font-weight: bold;">
                    ${itemTotal} ج.م
                </div>
            </div>
        `;
        container.innerHTML += itemHTML;
    });

    const delivery = 30;
    const total = cart.length > 0 ? subtotal + delivery : 0;

    if(subtotalEl) subtotalEl.textContent = `${subtotal} ج.م`;
    if(totalEl) totalEl.textContent = `${total} ج.م`;
}

    // --- ربط الزراير ببعضها ---

    // زرار إضافة الكريم
    const addCreamBtn = document.getElementById("add-cream-btn");
    if (addCreamBtn) {
        addCreamBtn.addEventListener("click", function() {
            const qty = document.getElementById("qty-count") ? parseInt(document.getElementById("qty-count").textContent) : 1;
            addToCart("كريم مرطب", 185, "🧴", qty);
        });
    }

    // زرار إضافة الفيتامين (لو ضفته في الخطوة اللي فاتت)
    const addVitBtn = document.getElementById("add-vit-btn");
    if (addVitBtn) {
        addVitBtn.addEventListener("click", function() {
            const qty = document.getElementById("qty-count-vit") ? parseInt(document.getElementById("qty-count-vit").textContent) : 1;
            addToCart("فيتامين سي", 120, "💊", qty); // السعر 120
        });
    }

    // زرار إضافة الترمومتر
    const addThermoBtn = document.getElementById("add-thermo-btn");
    if (addThermoBtn) {
        addThermoBtn.addEventListener("click", function() {
            const qty = document.getElementById("qty-count-thermo") ? parseInt(document.getElementById("qty-count-thermo").textContent) : 1;
            addToCart("ترمومتر رقمي", 160, "🌡️", qty);
        });
    }

    // زرار إضافة الغسول
    const addWashBtn = document.getElementById("add-wash-btn");
    if (addWashBtn) {
        addWashBtn.addEventListener("click", function() {
            const qty = document.getElementById("qty-count-wash") ? parseInt(document.getElementById("qty-count-wash").textContent) : 1;

            addToCart("غسول الوجه", 95, "🧼", qty);
        });
    }

// =====================================
// بداية JavaScript الخاص بصفحات حسابي
// =====================================

// التنقل بين صفحات حسابي
function showAuthPage(pageId) {
    document.querySelectorAll(".page-content").forEach(page => {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if (targetPage) {
        targetPage.classList.add("active");
    }
}

// أزرار التنقل بين شاشات الحساب
document.querySelectorAll("[data-auth-target]").forEach(button => {
    button.addEventListener("click", function () {
        const target = this.getAttribute("data-auth-target");

        showAuthPage(target);

        // تحديث زر القائمة السفلية عند العودة للرئيسية
        if (target === "home-page") {
            document.querySelectorAll(".bottom-nav .nav-item").forEach(item => {
                item.classList.remove("active");
            });

            document.querySelector(
                '.bottom-nav .nav-item[data-target="home-page"]'
            )?.classList.add("active");
        }
    });
});

// التحقق من رقم الموبايل
const phoneForm = document.getElementById("phoneForm");

if (phoneForm) {
    phoneForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message");

        if (!/^01[0125][0-9]{8}$/.test(phone)) {
            message.textContent = "من فضلك أدخل رقم موبايل مصري صحيح";
            return;
        }

        sessionStorage.setItem("phone", phone);
        message.textContent = "";

        showAuthPage("verify-page");
    });
}

// التحقق من رمز التأكيد
const otpForm = document.getElementById("otpForm");

if (otpForm) {
    otpForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const otp = document.getElementById("otp").value.trim();
        const message = document.getElementById("otpMessage");

        if (!/^[0-9]{6}$/.test(otp)) {
            message.textContent = "أدخل رمز التحقق المكون من 6 أرقام";
            return;
        }

        message.textContent = "";
        showAuthPage("success-page");
    });
}

// نسيت كلمة المرور
const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {
    forgotForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const phone = document.getElementById("forgotPhone").value.trim();
        const message = document.getElementById("forgotMessage");

        if (!/^01[0125][0-9]{8}$/.test(phone)) {
            message.textContent = "أدخل رقم موبايل صحيح";
            return;
        }

        sessionStorage.setItem("resetPhone", phone);
        message.textContent = "";

        showAuthPage("reset-page");
    });
}

// تغيير كلمة المرور
const resetForm = document.getElementById("resetForm");

if (resetForm) {
    resetForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const code = document.getElementById("resetCode").value.trim();
        const password = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const message = document.getElementById("resetMessage");

        if (!/^[0-9]{6}$/.test(code)) {
            message.textContent = "رمز التحقق يجب أن يكون 6 أرقام";
            return;
        }

        if (password.length < 8) {
            message.textContent = "كلمة المرور يجب ألا تقل عن 8 أحرف";
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = "كلمتا المرور غير متطابقتين";
            return;
        }

        message.textContent = "";
        showAuthPage("password-success-page");
    });
}

// نهاية JavaScript الخاص بصفحات حسابي

