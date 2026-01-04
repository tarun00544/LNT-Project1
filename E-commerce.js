    // Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

// Create dots for slider
slides.forEach((s, i) => {
    const d = document.createElement("span");
    d.classList.add("dot");
    d.style.cssText = "height:10px; width:10px; background:#bbb; display:inline-block; border-radius:50%; margin:5px; cursor:pointer;";
    if (i === 0) d.style.background = "#000";
    d.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(d);
});

const dots = document.querySelectorAll(".dot");

function showSlide(n) {
    slides.forEach((s) => (s.style.display = "none"));
    dots.forEach((d) => (d.style.background = "#bbb"));
    slideIndex = n;
    slides[n].style.display = "block";
    dots[n].style.background = "#000";
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
};

// Auto-rotate slider every 2 seconds
setInterval(nextSlide, 2000);

// Cart and Product functionality
let cart = [];
let cartCount = 0;
let currentProductId = null;


    const productData = {
            headphones: {
                title: " Bowers & Wilkins Px8 ANC Wireless Over-Ear Headphones",
                price: "₹4,999.99",
                originalPrice: "₹9,999.99",
                discount: "33% OFF",
                rating: "4.7 (2,847 reviews)",
                stars: 4.5,
                description: "Experience superior sound quality with our Premium Wireless Headphones featuring advanced active noise cancellation, 40-hour battery life, and premium comfort design. Perfect for music lovers, travelers, and professionals.",
                images: [
                    " https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqXw3hWjWB4Q6_9jLjxAFaGRSaUx7vkOO7p_LU2940i99WedPlCmB-QEvT4VbaIij9jBTxzQcKg5bKwW5510vPfPaydRkY9ijXe6eEzptK3KHAg4MMcJZiCg",
                     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSg2G68jWyvKDOcI6oV2aUhnu1hQ7qf2wx0byRCToU_OTs2fviNakrS4L9peZxJ5qwCTskM1pQt2anJGwVy3LJaz7621uJfwf2rzUSKjkYhzS-PAR_KGvEDjA",
                     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfraqctMH8BlJoPCcSK05pqvg7JmXR8j9DZFp4NlVmBxAI5ls3iT6aENwC5tPJkOoYSDL_fsIDl5pm0LMYBav8AeUFBrnZLt4JE5ZZCgNaawnPxWI_KJCQ",
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFpdf6wxYTKKVp34FbjQBXSJq64fpAaH09MEY06z9rBEIaO1X6ge1M3-95oPb6XVDHB3ArHMF0erREDddG7sASHjducXM8rCDnkyBKWs6HT564F9JAPOUPmm0",
                     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnfllIHB4OIlXDF-kRB-HUFUvXBll7_Xe2xDZXHSCZ5NjeXaJMo446-pToKOXNjQRQ4HwGp1_5__xeAmPIHpaiv9QTSpL9f5qYpN_cK_LWge_sebOkNbYd2Xs",
                     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScWajpAPWru8IxNfDwjH1hgyBkIDdaRb6xaEFVGebzK5wgJ9IPRxlZMl3GfPDLalQrDENlLA9IxOAkI8Gx7Kaqo-LHMwKaC4Bri1wELz8mP-PzXTQmIkQhtks",
                     "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQF76RVkTpnZlFS0NmzFStj7xdKSqJXNsJo7rCfhZNvSc1V7bfcSfm-yKpdnzWTFPVtnTO-la4tNws810qIwv1areS0YQRv5LhzQW5WPQzn7jqMAdoUyjVqIA",
                     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNscLjzdQpnO_7NP5quDbXe2pM-eK4aeDgyQEKujQdh55oLhG-ujkIoHDWyj1tKwTQsGrWrI84VE5TKwI3VnprHNPo7tTw2hof1jxwubkPTwSwLx18Ebv25uk",
                     "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSqmGoXZ9VY35wsJwpOVA1pEj8ErOF4H8DUUgpuXb7ZgVgia--QUEUQDN7Ok4zTnPCEvyEzmTSSvgYKkTeDmZe6jW_SeFj5N3CQEkcvLw",
                     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSe_AUukh8AXBwyda00SL3qKwc3wPkCBbxVV_e5hNITPtzMq_pJIiiqj1aKtv1VTAshxZcuq9Atsn1bvKDLiXIMYu7PE7QPI1hF4VC6vOEKD6jqrCZfDg75HQ",
                     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSe4xeVp0PAqsykXySzs1zexG5AKzaFCh_PT28FulcdaymqpDUD83mV8U7hgj1uviS6ROS9smTnkv8fqrCye9gNOeBfJCOTsFFRor1oYso6Tw6yuQEP4saH",
                     "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTIAambOgZ3fMh7a4MSnBh_bRLDaaulhOlx34rc3JBbJNgAeCGoc2cFJ8PewgeNAc3UASvY8Bw4ms0wyi5-ICLUH4FQu7XgVtSLaeip1u5A1jcK9qU6Ttq1",
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYwtiRMyQ6BHt4Cl7i9IWAT00rCbpgRxUl_4TgJyCy39IBmTOmfIcTo7VRw2xpJEOTcbcJ50EFl8CiyYwREUsE27lmzak256Ly0JTV4XGZppSoGY2Ut41q",
                     "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTd6NuMGbJBeD0iGEXM14MuEkyfiDFI1GR_CFNtxTOHwwKBqt2z8YWI8WZr7sdTZw-GoSeK4zWLB_54EUnIjEMiKkzWanpYJsvNNK1k39J3"
                ],
                features: [
                    { icon: "volume-up", text: "<strong>Active Noise Cancellation</strong> - Block out distractions" },
                    { icon: "battery-full", text: "<strong>40-Hour Battery Life</strong> - All-day listening" },
                    { icon: "bluetooth-b", text: "<strong>Bluetooth 5.2</strong> - Seamless connectivity" },
                    { icon: "microphone", text: "<strong>Built-in Microphone</strong> - Crystal clear calls" },
                    { icon: "headphones", text: "<strong>Premium Comfort</strong> - Memory foam ear cushions" }
                ],
                specs: [
                    ["Driver Size", "40mm dynamic drivers"],
                    ["Frequency Response", "20Hz - 20kHz"],
                    ["Impedance", "32 Ohms"],
                    ["Bluetooth Version", "5.2"],
                    ["Battery Life", "40 hours (ANC on), 50 hours (ANC off)"],
                    ["Charging Time", "2 hours (USB-C fast charging)"],
                    ["Weight", "250g"]
                ],
                reviews: [
                    { name: "Sarah Johnson", date: "Nov 28, 2024", stars: 5, text: "Amazing sound quality! The noise cancellation is outstanding and the battery life is exactly as advertised. These headphones are perfect for my daily commute and work from home setup." },
                    { name: "Michael Chen", date: "Nov 25, 2024", stars: 4.5, text: "Very comfortable for long listening sessions. The build quality feels premium and durable. Only minor issue is the carrying case could be a bit more compact." },
                    { name: "Emma Williams", date: "Nov 20, 2024", stars: 5, text: "Best purchase I've made this year! The ANC is incredible - I can finally focus in my noisy office. Setup was super easy and the Bluetooth connection is rock solid." }
                ]
            },
            watch: {
                title: "Redmi Watch 5 Active",
                price: "₹1,499.99",
                originalPrice: "₹1,999.99",
                discount: "25% OFF",
                rating: "5.0 (1,523 reviews)",
                stars: 5,
                description: "Track your fitness goals with precision using our Smart Fitness Watch. Features continuous heart rate monitoring, GPS tracking, sleep analysis, and 14-day battery life. Water-resistant up to 50 meters.",
                images: [
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdRdRFtHsNP3gwDK6XLD8yAMyy_CjyCEHMubj8-YB48k5efBoU_9uNhTnKCRsWyxfCCvzIqoOxQKIdBkkQzQ1ooZ6a2Sl2-W0oujX9ZJiznBF9uZl-DKRZu6wR",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9XxdQw0j_dOpAVhFp4N3Y9Eaoh2SeZ58gBD4M5EXD8t9dpG9xjJYsHJcW65jC2Zl8x9VHjvet4yO41pue7SBouf9UvXeeQHqflro4MnzA_BV8Amp0sR63tw",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyX2liTrRNpHB8rvVL3MBDmFb61_K2KkQPg2ZT9UGxM-0exP52o9ZDR6k8eBSMSD9MxO1cK1rXWb2LGS18LKdSX1tXXgD6sQcw2S0Cr5Tk",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsF5m6k8bRTKsH_FePdPNS9GcHrQ1K7kmylXyqyPBXmxhOrLvysDKGmLOiOXxIOAlaswawltD1PT3ovv4aBarZspTBGwsRcwmFjWcle5O8_qsMya13E3vq",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbzGfiItVOr5cZT_UqBTlWDBgAZi4ANbso_XZPlxjiIvmTgXp7AhoY_udPyT5U25BCkhSIJsO4bxHDN5gbUL3eRodLaXY_EOiO8VDUpnAcNp497Q49AmaPCA",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-PNpwI8migiJ_mCmLuxI6KgtVPyW6hmvqpprB_y5FqUGCADaYqutlZs6TftU24kjuZ8fKz2KO6ySn-HmMMCGw7VfUv2fqe65nT9lDs9YZB4i-6aXWzyOv",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTYYlo0XDZB_s3D_plZ_xc7MWoFX87Cs_yRXJ90-gSYHiYncFMmnyj_RazUwrZ0dM6WvC92sYua53a-n6e_3182IgYBwd-tideddIxFYHNKz2zeXAlJ8-JX5g",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgq7VcNmj7oiFbh9mqcoHd2AUIZ1dYe_WiS7JVgL9USTANoNyv4IaxSMuFVzLpLm1Azc2UmYf6t6CaklQPCC5vmkgmIJMaJFsMZ7_3JDE",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRUkhpsBJJAez0w7gTBxI9n1ZYmBbCdWZdVLT6cFPtv28ZHwQjvMu5v1VRoH1dBFaLKG1bnHiADrgeVXECbyIybA2bSl8VC3DcTQ5ez446t",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbff6fpYmWAW9jpKCdGdP0BAzxkRjJGwJ1OI4dsfOPdtk9c4RgEc0hrY7ep0gFr7vTc5izyAj0lVmxJEznIyCQJOIP8O7g0Cis_aH9XiWpG_my0HbGsg5I",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMhhWch-_WonIlP9AhwsXTlNlCreYj3ZY1nooTQDkEfjuQ6xKQHM7h04xRVKcb7BpJtVBF8m1b8lUzHqA1Raz5oye-eiNPXg0xHVs8HKw",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTm0X7AbTasoQznQJasLbmb_Q1Tf99S_uZHwP4a11iTDvYZW2wtwfhYvIRhs4wdp6leKZc989YXQ7sn1z1jvJtdsJ_ChAyxLBSwIhAvYqDkwRUWaQ0eBUuy",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd9sahTRV8kZN9BP0a5ZivaqaEDhELumQZ6eSMv3tJHwUJUTdW7PGozQhHHHMFsvFdRsR7TyvXfpRo9j4VsqyNJAdx-v1il3zQK4XoVd3p",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtMtUR-Az-oSUlWhDorgkQfV0r_K-7M7C1VzpkV0AyizDH_F2Iy_XGpaRFYDbLajIMlai-zt4oTfn0HDa6IGbFFnXL6Gglj1rNDiLes-I"
                ],
                features: [
                    { icon: "heartbeat", text: "<strong>Heart Rate Monitor</strong> - 24/7 tracking" },
                    { icon: "running", text: "<strong>100+ Sport Modes</strong> - Track any activity" },
                    { icon: "map-marked-alt", text: "<strong>Built-in GPS</strong> - Route tracking" },
                    { icon: "bed", text: "<strong>Sleep Analysis</strong> - Improve your rest" },
                    { icon: "tint", text: "<strong>Water Resistant</strong> - 50M waterproof" }
                ],
                specs: [
                    ["Display", "1.4-inch AMOLED touchscreen"],
                    ["Battery Life", "14 days typical use"],
                    ["Water Resistance", "5 ATM (50 meters)"],
                    ["Connectivity", "Bluetooth 5.0"],
                    ["Sensors", "Heart rate, GPS, Accelerometer, Gyroscope"],
                    ["Compatibility", "iOS 12+ and Android 6+"],
                    ["Weight", "42g"]
                ],
                reviews: [
                    { name: "David Park", date: "Dec 1, 2024", stars: 5, text: "Excellent fitness tracker! The heart rate monitor is accurate and the GPS tracking works flawlessly. Battery life is impressive." },
                    { name: "Lisa Martinez", date: "Nov 29, 2024", stars: 5, text: "Love this watch! So many features for the price. The sleep tracking has really helped me improve my sleep habits." },
                    { name: "James Wilson", date: "Nov 26, 2024", stars: 5, text: "Best smartwatch I've owned. The display is bright and clear, even in sunlight. Highly recommend for anyone serious about fitness." }
                ]
            },
            phone: {
                title: " Vivo V60 5G",
                price: "₹36,999.99",
                originalPrice: "₹43,529.99",
                discount: "15% OFF",
                rating: "4.7 (3,241 reviews)",
                stars: 4.5,
                description: "Experience the future with our Latest Smartphone Pro. Features a stunning 6.7-inch OLED display, triple-camera system with AI enhancement, 5G connectivity, and all-day battery life. Lightning-fast performance with the latest processor.",
                images: [
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtqlrAKH7PMDwoLdUjU5_9qRbv9wzyHNh4hZ2nUGRLoj5cZlHJ1Ismx9XSSDXrKEeGn7_6ym__p2tW2r5tU0hUVvv_dXsd_ShY-eEIOrgwuulVIbK9asUH",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-RdlxO_kaDtB2V-zAA0K6EvP974XblTqTz_GrjuF6q-J3matGqExUrqm15tsuW4qq0B3c-IBeTTxwXC9_pO08V_AccPEyLN7JE4yewQSZlNLFy7CkLKV8Uw",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0D8XDrMQRIjkHsiJhd3leZ7UDV6geBOeldKV4MSWVHlC0sLasyaH1811SBj7jsl7gbr4AEc7Gj6S9PDmL-CovLfXDakpdWSt4HylpUyuQBeYox-TjqDZk2A",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3FyzaSpNqtgPA1HZdlqzym-wOAXPaCld-uOINytkGK_bEd9JmwZ9bGbfoiVeQdcF1paYH-EsIzA3TjtRsEKDkErFZuHXEDPMDJI1CXG3JwWeLeR4spUp9",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ95vcLpiIR78P9oHc7woEB7u_O95FKhSG0Pk9tFgibyaUM7Xm7Ue-awyctSKhmNdO4Ac5HgOWIRRHP7zTOtcOiyZJI6aaDAROL5XZ8O90a",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfSdRbzd5256gYixwc_GxAK88fCAhgdZe7hJAPjJEKsherzW_2JFnjhWNjEC-gvcBfVc8AlRz5RsSETtbwX3biObY1WsPVMXZTJOFr0E9nDFrU5SH4ooBsCQ",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3fil_yQG0nYQR5DC4l0HXQdhD9VtY40hwSPLYlXOG4y3v09CfO242IWV7FhxHTF6QDWBR9lBrCXJDaOhrBpbzqCkCpRqewK_ZMvmPuMV0hS0jG6UwXyZ6Dwc",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYoIOOUJEkTRuHICDvjELYYF9WxQNpY7fH_dPe2TvNRf2ZOL3Ni7BWPXNo9e_bIMvxTv7tcYyraZx6FvJD-pn602NN8lyHNZnJHCUNeBAS06vBBuNCxf8y5A",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRe_w-8VH45UI_pJP1MFOjX-KnYaO2qajaFDmn6AthoTbtfxmUQZGKpUUU9T02suCXDvm0Z0raZR4hJdTSEakQy9S8XN0qU244nSw1iuyW658RYLsZiZmLkXA",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR67HmaApfRr6YIYFJ-uyXSb4TiWDvzqwjR4zr7CQ3ThtErDQ9o_vNpXazOy-RB4T1ydtqP8ce2MhRnFiTd0zu7EBqycXXB_b9z1l2YA5UkZrmD5khY5wmU",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLjhgVD7_ebKYrUd4BpxlavSiX0vYYKSvutuXG7g7bo1C0hxNkgj31TWBkfXMgb4AzEB7JhxFlu-QSvd_n0ad67nJw-sOZl3DpRU3N1tLMz97ttUvLlUiA",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQk6w772nLE1cDHH2WSnolKXY5KqyJJV09i3fGme6GEb8M6bBr9t6XJgyY6O0UPMdProm2MzDLsmFCwEZWmJW9EZj0rtZkjBqvEsX3agP2cz0wXO879C7a5",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRF7lF5G3zJ3XXmSbvdSwcIkbgdOMhdhXek16H_Xpu3fDRhfrAINdhUfjrpXq2zjW7ukPIn18Nfk_U_zKJqA8WaoySZd34Y_gGkDbKjBa2d",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6PCabRVzSOeRMvvXWV1rKf-9GFPGEp5WO8C81g_YVuMifScxPLeKBG52nsh9yY7pxwbQfT1LXa9_ZjjAaFty1ycyoF_F02XYLGuo5Vfsw"
                ],
                features: [
                    { icon: "mobile-alt", text: "<strong>6.7-inch OLED Display</strong> - Stunning visuals" },
                    { icon: "camera", text: "<strong>Triple Camera System</strong> - 108MP + Ultra-wide + Telephoto" },
                    { icon: "bolt", text: "<strong>5G Connectivity</strong> - Ultra-fast speeds" },
                    { icon: "battery-full", text: "<strong>All-Day Battery</strong> - 5000mAh capacity" },
                    { icon: "microchip", text: "<strong>Latest Processor</strong> - Ultimate performance" }
                ],
                specs: [
                    ["Display", "6.7-inch OLED, 120Hz refresh rate"],
                    ["Processor", "Octa-core 3.2GHz"],
                    ["RAM", "12GB"],
                    ["Storage", "256GB"],
                    ["Camera", "108MP + 12MP ultra-wide + 10MP telephoto"],
                    ["Battery", "5000mAh with fast charging"],
                    ["OS", "Latest Android 14"]
                ],
                reviews: [
                    { name: "Alex Thompson", date: "Dec 3, 2024", stars: 5, text: "This phone is incredible! The camera quality is amazing and the display is gorgeous. 5G speeds are blazing fast." },
                    { name: "Rachel Green", date: "Nov 30, 2024", stars: 4, text: "Great phone overall. Battery easily lasts all day. Only wish it came with a charger in the box." },
                    { name: "Tom Anderson", date: "Nov 27, 2024", stars: 5, text: "Best smartphone I've ever owned. The performance is smooth and the photos look professional. Worth every penny!" }
                ]
            },
            earbuds: {
                title: "boAt Airdopes Alpha Wireless Earbuds",
                price: "₹1,999.99",
                originalPrice: "₹2,499.99",
                discount: "40% OFF",
                rating: "5.0 (4,182 reviews)",
                stars: 5,
                description: "Premium true wireless earbuds with active noise cancellation, superior sound quality, and 30-hour battery life with charging case. IPX7 waterproof rating makes them perfect for workouts and all-weather use.",
                images: [
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYaQiOkDmOHfOujzbzaPZk_ySQJVfQIz8s3n5T62oCV4lvsobAgQHBJHSleCxm0OuJtQBFIfXy-U8OJCUR_sMLNw8sbYldB22yi5soq76dVUfwjeUWK9M_JA",
                     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjV_qcvw4m1XNZP9GeoSmpsODBNVVwTi1XpSlyctgE7jUaEhcRh2OTFi_GQMdF9rDyXFRwIViaAikCo_tP6eBbgbaLTv4bs_qTxq6wR8yB4bFCO2KXyjK8xw",
                     "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGVaNuNRW2BVsaJjVMELGdPz48R_1fWlj0yBqYcWoy6GohSGA3SB-ufc4v-YN2vNSumKnWalMERWHfcCf0OZOkiqRkDGPYQkx-kpEd0_G3",
                     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7Sdv5AUCdK-icdVuBuqu1fvspJh5USwqeUp4HfdUG4JN5O-f7bxnzTUPeeIA2H9QL8IB2jlLaDeh5SU5tWwWmK-WOnpXubnk2Th-wZmsyrV8zZ0Cpw6YG",
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAYTVVT_0BV458yrYIMbN-IyFmcmub3TBFvsXbawD4VBLHGjmhudbpz2tx3QmVJa1sTnmjttPMy-XfswdUHoir_M2JIWjk7TastGoqmEI",
                     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwyLqXxX0FFpTUqwJLr3Eu_kzJuS5-eqdTDuxwtxcoRMEnrZ322Xy9HLyIoLOKb8tnns9qsvWYYpFclDpJmc78VUfJCREq9z7wGoDKDQH4",
                     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSq06B5ngLzgqBPwctFMsJ_0LpSiWRwwE33uZUn-u_Z2jIuNAS4HbGaO8qX3eJN_BYdoUe5J1nqduwRowjAsWqx-N_Xdad6wr73j7Ce3kA",
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTkZ1og1GZlBxkL_VYU3GLlyZSbmvXB-59fl7TOaoRst5V8Fx0p0B-Q1QjFRFgG2JaC1fGghle1r_ffVImSe6CDRpixE0ED0Tp9m9lejLJeoerQxvSq_cHAQ",
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTUj32BqOtmdG78O93ZRSV2JwkeDnQar0Fo8_AhaZJVOzZ058tuAgPgRGFpO1AZiRrQONhMW19YwaMoWdDtR6kc0qY-KgB-woSFt1bKujE",
                     "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRs9hr8k8UCZpJIFlc7Bcr9Wx6MDtTUtq6dcHF3nly-gCsPpFioSarr9nhvcMGaN-reXOoHderSOg9n1mJGdrr6nwlXNz2rUHrxPCTM_xY8",
                     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIjSLihXi31T95h0iXW1vm_CmpzX5C2Wb8WD8Sy9-nTMBzHvtdRBcWBJth_az3VhFiUzvZV7L3h1iX4QYr4_jh7adcylwllBAsPSjeqrme",
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEEUsI3myIi25n5MS3366qLZ0UiOL1KJnIDHZ8xGQbGhPsBJFUjIg6WiHoLx_rQeD6zLdBKkBMFQJZmfAhZcvZ0pYAtM54NUdM09cQkZ8M6EsHn1-JamGk9w",
                     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXwtvw_fkkETuGnkudHkJXGKATb6Vzyv7wC8JI-kGe5IYY8weWlayUAz9lFynZcz4Qh5doIH0OjqYEJNP9DHSqOdmu2MHs0p2DhksI6Yw-",
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7v9bLROuQKLxpKOTA9pbMS1Icb3FPSteGT2cuRAZcEu1xcMQk7qMTlgsRKY1RWLI9mrZlPEykCpLFP3zFuALyq4JBwfXn4m1WLbTittQ"
                ],
                features: [
                    { icon: "volume-up", text: "<strong>Active Noise Cancellation</strong> - Immersive audio" },
                    { icon: "battery-full", text: "<strong>30-Hour Battery</strong> - With charging case" },
                    { icon: "tint", text: "<strong>IPX7 Waterproof</strong> - Sweat & rain resistant" },
                    { icon: "hand-pointer", text: "<strong>Touch Controls</strong> - Easy operation" },
                    { icon: "microphone", text: "<strong>Clear Calls</strong> - AI noise reduction" }
                ],
                specs: [
                    ["Driver Size", "10mm dynamic drivers"],
                    ["Battery Life", "6 hours (earbuds), 30 hours (with case)"],
                    ["Bluetooth", "5.3"],
                    ["Water Resistance", "IPX7"],
                    ["Charging", "USB-C fast charging, wireless charging"],
                    ["Weight", "4.5g per earbud"],
                    ["Controls", "Touch controls with voice assistant"]
                ],
                reviews: [
                    { name: "Sophie Chen", date: "Dec 5, 2024", stars: 5, text: "These earbuds are fantastic! Sound quality rivals brands twice the price. ANC works great and they're super comfortable." },
                    { name: "Mark Robinson", date: "Dec 2, 2024", stars: 5, text: "Perfect for the gym! The waterproof rating is legit and they stay in my ears during intense workouts. Great sound!" },
                    { name: "Nina Patel", date: "Nov 28, 2024", stars: 5, text: "Best value earbuds on the market. Battery life is excellent and the charging case is compact. Highly recommend!" }
                ]
            },
            bottle: {
                title: "PEXPO Craft Pro 1000 Sports/Fridge Water Bottle",
                price: "₹399.99",
                originalPrice: "₹499.99",
                discount: "20% OFF",
                rating: "4.2 (892 reviews)",
                stars: 4,
                description: "Stay hydrated with our Smart Insulated Water Bottle. Features temperature display, hydration reminders, vacuum insulation that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
                images: [
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8zzshaL00mXV_qRgS5MVAa6pAM8OKaer_EqER8kt8YBpzoO1Xdb6wU80woQrqplEAK5dM2pKzfG-qy3Hg6cMi29_xwLeligSTec0ZMQMvkK56aF5ajO1L1g",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-XV6GD1Dmqk0c7aHMjW8zy7GxBrglEvFO_cX6xhZRdnpKNurJL8A9mHjx0X5oi2VCWaxwu250smSmb8Bq3Vbcmt4pJq1SvfFLuL1rCR1SJE8dPOCHvbeq",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnlUYKZb5AylF_wAF7M8cXSempO63kwgjTiOZsIk7SXEK4gxAvgl8VdMp7iKxjhuuJ1FUkWPVB2L6RHiEEOQIQmnR7d2NS3EbDZPRh8j5e",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGKsx2EswUViliS-IsFFPVxFDPQEOecF-7HhX0w-GVE9Rr4VamJIgEy52X8cc3Yh-zVgq8_u7G5lyTt5eNkC4i1_GYTef6LNGA0gHWfmg_mYtjtkv-X7rR",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3DMSBFuZHhJcKjqy3p4ZM3dlCQ0bt6knWhvu-c4nUStZAy6bUHrZDZKBs8us4iSSOORQ8ISa8uYMf_1E2uIANNstr5qaW8aKWjFpZmQp8kpspvLXoFAcv",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNnXlT2_Qf7OHblAotD1rBImmPev4-dsHgPqpfngDWXau2xb9lLlAuZGw0C24m_Dldpo57xjkytHZkPMp8BHmDQBw9-R4E7xXrshTMwrg",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS11rIYEFqATE3dQscbGZnkJISRlq75El3Q_oYKStWBY-quq2AFmO739LCtTAXf2vllv2VGf8YXVfotKvKoVzz2l0r54tsSj3nhNN4fkfMmfShw_1XC4Q43IA",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAj0S0XJLXllTUTSobHK_yX2xUf222LI1Lse7FQXBcJNcmwKrBnTHVRwcDQvy_HNikYqPXl906u49pWQAdFiROp-v9sOp5WfHAY_KZvVCofl1fP5iF2UBeEg"
                ],
                features: [
                    { icon: "thermometer-half", text: "<strong>Temperature Display</strong> - Digital LCD screen" },
                    { icon: "bell", text: "<strong>Hydration Reminders</strong> - Stay on track" },
                    { icon: "snowflake", text: "<strong>24hr Cold / 12hr Hot</strong> - Double-wall insulation" },
                    { icon: "shield-alt", text: "<strong>BPA-Free</strong> - Safe materials" },
                    { icon: "lock", text: "<strong>Leak-Proof</strong> - Secure lid design" }
                ],
                specs: [
                    ["Capacity", "32oz (950ml)"],
                    ["Material", "Stainless steel 18/8"],
                    ["Insulation", "Double-wall vacuum"],
                    ["Cold Retention", "24 hours"],
                    ["Hot Retention", "12 hours"],
                    ["Battery", "Replaceable CR2032 (6 months)"],
                    ["Dimensions", "10.5 x 3 inches"]
                ],
                reviews: [
                    { name: "Jennifer Lee", date: "Dec 4, 2024", stars: 4, text: "Love the temperature display! Keeps my water cold all day. The reminders help me drink more water. Wish it was slightly easier to clean." },
                    { name: "Chris Davis", date: "Dec 1, 2024", stars: 4, text: "Great bottle for the gym and office. Insulation works perfectly. The smart features are a nice bonus." },
                    { name: "Amanda White", date: "Nov 29, 2024", stars: 4, text: "Very happy with this purchase. Durable construction and the temp display is surprisingly accurate. Would buy again!" }
                ]
            },
            tv: {
                title: "Samsung 55-inch 4K UHD Smart TV",
                price: "₹54,999.99",
                originalPrice: "₹66,999.99",
                discount: "18% OFF",
                rating: "4.8 (1,234 reviews)",
                stars: 4.5,
                description: "Experience stunning visuals with our 55-inch 4K UHD Smart OLED TV. Features self-lit pixels for perfect",
                images: [
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/0/RiBn3xIViR-eenbjaWwP1z-SAMSUNG-55DUE70B-LED-TVs-494410248-i-1-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/1/omz5aHgzhr-tDTiZL-3Ey7-SAMSUNG-55DUE70B-LED-TVs-494410248-i-2-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/2/1tOwXeT4qC-v2pVhgmKTnD-SAMSUNG-55DUE70B-LED-TVs-494410248-i-3-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/3/2KKwUbZa7w-ZwphwhKpdSt-SAMSUNG-55DUE70B-LED-TVs-494410248-i-4-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/4/yWU9UthD7U-HobDL4IloZD-SAMSUNG-55DUE70B-LED-TVs-494410248-i-5-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/5/8fNWMbIpat-cAqu6Se3O2n-SAMSUNG-55DUE70B-LED-TVs-494410248-i-6-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/6/-9m4Stf0BO-89tn9nvy4cM-SAMSUNG-55DUE70B-LED-TVs-494410248-i-7-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/7/6iz9mu2D2a-jLPQ8q5MfGu-SAMSUNG-55DUE70B-LED-TVs-494410248-i-8-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/8/pZsi-M9deb-uYPQO8hiD6Q-SAMSUNG-55DUE70B-LED-TVs-494410248-i-9-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/9/33UtZWGtJ6-tgWG9XHMFZi-SAMSUNG-55DUE70B-LED-TVs-494410248-i-10-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/10/thTzM5ZvSj-ih8wXLYjNSD-SAMSUNG-55DUE70B-LED-TVs-494410248-i-11-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/11/bf-YT_-c9r-NCTIQOvYLqB-SAMSUNG-55DUE70B-LED-TVs-494410248-i-12-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/14/yfY8kvSLHF-yhvUV4TDPAs-SAMSUNG-55DUE70B-LED-TVs-494410248-i-100-1200Wx1200H.jpeg",
                    "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/samsung/494410248/15/nomXeACOeS3-9Ouaw4SyxEV-SAMSUNG-55DUE70B-LED-TV-494410248-BEE2024-i-300-1200Wx1200H.jpeg"
            ],
                features: [
                    { icon: "tv", text: "<strong>4K UHD Resolution</strong> - Stunning clarity" },
                    { icon: "palette", text: "<strong>Vivid Colors</strong> - Dynamic Crystal Color" },
                    { icon: "smart-tv", text: "<strong>Smart TV</strong> - Access to apps & streaming" },
                    { icon: "hdr", text: "<strong>HDR10+</strong> - Enhanced contrast" },
                    { icon: "voice", text: "<strong>Voice Control</strong> - Compatible with Alexa & Google Assistant" }
                ],
                specs: [
                    ["Screen Size", "55 inches"],
                    ["Resolution", "3840 x 2160 (4K UHD)"],
                    ["Display Type", "LED"],
                    ["Refresh Rate", "60Hz"],
                    ["Smart TV", "Yes, Tizen OS"],
                    ["HDR Support", "HDR10+"],
                    ["Connectivity", "Wi-Fi, Bluetooth, HDMI, USB"]
                ],
                reviews: [
                    { name: "Michael Scott", date: "Dec 6, 2024", stars: 5, text: "Amazing picture quality and vibrant colors. The smart features are easy to use and the voice control works flawlessly." },
                    { name: "Pam Beesly", date: "Dec 3, 2024", stars: 4, text: "Great value for the price. The 4K resolution really makes a difference. Only downside is the sound could be better." },
                    { name: "Jim Halpert", date: "Nov 30, 2024", stars: 5, text: "Best TV I've owned! The HDR makes movies look incredible and the smart TV features are very user-friendly." }
                ]
            },
            tablet: {
                title: "Samsung Galaxy Tab A7 Lite",
                price: "₹17,499.99",
                originalPrice: "₹19,999.99",
                discount: "30% OFF",
                rating: "4.6 (2,156 reviews)",
                stars: 4.5,
                description: "Professional-grade tablet with stunning 12-inch 2K display, powerful processor, and all-day battery. Perfect for creative work, entertainment, and productivity. Includes stylus support and keyboard compatibility.",
                images: [
                    " https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlXczJcmFfwBxBM0aNdk0sALc_c0wfNqBvQui1OquXE_GSZfeqWUp5yGNgrp3QBiBfHLNxcqWtYadXuFBrb7EvNnsT-iiH6EIJXzlFoD1ZRuHkJvE0jsHH",
                    " https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-oUQDK5fcYW-QJ2cnB9MYzbSz7ADqg1zi6Y9L8RSjToILG-EyJJTtA9JCRqSXvK1ByrdCnj9Z9C4Apvoa_3kvBnxB9_nr2uJtV3gOvXd2NFI_mRE_d9Z53w",
                    " https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsiOxPaXfoxn7MdPUIk_Oon9CNFXd4zis2eLSq2J0lxN2m8RT9wIxLVpT9Hs-RQzt-FIHl2sVJbgXrqGhfInQ7kVuszptgDPg5d0YmevtfRiwfSlApVnrk",
                    " https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPlokkoZnZFTN5boPVzSehK3p5BMc4UzqXA3looIi8I4a3YRR7o4kdGj1mls9RDkggZKHIWnQCUMvzZ1jCWZgVBIlEFlDdodWHe-5Vunl0tMpXqeifKjnsCA",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYiD3ZgvR_EPaECwEgqZYLujM8sw5FwcQxcA3f2mh3gY0AR2bSHqCsOffz888JWB1MqYz7_g9-qgsQQvNmnGyEXG6WnFdbB1t8A4sDD-uqfqoPi62CGv8g",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl6V2WF4jUCzpCoNsbOE2fPSdLycA7OFbyWKScW6YjZouusZ0DEMNfE66To5cvHvIJG0J72-IMHswRGQgiYmSj8zINgEjWsZ6gS1jzfj76LKu9usj9dOEb",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6MH-CKCfkYPEdvgSvJrXHXCglXnslTrYQPPqcZlzUm0cJF0XpeZZY_ladUMXM-PnEFNjDDKtDdmfElTe94oMlq8ZrFVGuEof-Ch44FpICZOEB2JqklBUY",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPUz71cnLuwXLVt5_QIs0n_qUIbVeUbbCFy9TBCGTsvc6RDIriVpVZIsCVfck6GbcNQ4Q3Qda__T5Uq-gXwsJsKQDkib7i5EP1LcODS8yjnELUJMtPGZQ",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-jd-u-QeN0Q15ZVEFfkpftmG_IFCfBKqipVPOG0jp6JLiZpqniNFvKBSMAB4e2XwDVFfbm9_qTkLNw4KnnYqPNZUbwIKx0gNfcEF2x0Qkl08xRObN5iN6",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTAMhO9V7-sBCAEa_A5qb65l5JTehR9bCPl3jS3XQ2qdgD5cdY2Y8JOO-jgWVJSjDZ7169bM8o8r-rkuqn3LkTH5PukeRD2_5uBqjfFQ2tGRHoBMs9wumj",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnTwYUupQlBjItTipEGh4U-j6C9ws2UcLkm0iaq1XB6A4L-FQIlALb5KLrm4x7Lmi51D6vkhqJ8CoFrSyBqxXOXh-4rm5Y9umCKBU7LyW4DWUg1vWSTgxc",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHzhuidCILbhMetHmMJpgO5nB3qHKqTjLcz_CNKcyP3wPIYYao8q4FLo4M0Xhd0ZZQjaHLMhuyzyEoOxeD4CJ7ePSl9z_-lHKyOoGUZ-J5w9alFV_5pLydCw"
                ],
                features: [
                    { icon: "tablet-alt", text: "<strong>12-inch 2K Display</strong> - Crystal clear visuals" },
                    { icon: "microchip", text: "<strong>Powerful Processor</strong> - Smooth multitasking" },
                    { icon: "pencil-alt", text: "<strong>Stylus Support</strong> - Precision drawing" },
                    { icon: "keyboard", text: "<strong>Keyboard Compatible</strong> - Full productivity" },
                    { icon: "battery-full", text: "<strong>10-Hour Battery</strong> - All-day use" }
                ],
                specs: [
                    ["Display", "12-inch 2560x1600 IPS LCD"],
                    ["Processor", "Octa-core 2.8GHz"],
                    ["RAM", "8GB"],
                    ["Storage", "256GB (expandable)"],
                    ["Camera", "13MP rear, 8MP front"],
                    ["Battery", "10,000mAh"],
                    ["OS", "Latest Android 14"]
                ],
                reviews: [
                    { name: "Kevin Martinez", date: "Dec 6, 2024", stars: 5, text: "Excellent tablet for work and play. The display is gorgeous and the performance is snappy. Stylus is responsive and accurate." },
                    { name: "Laura Brown", date: "Dec 3, 2024", stars: 4, text: "Great for digital art and note-taking. Battery life is solid. Speakers could be louder but overall very satisfied." },
                    { name: "Daniel Kim", date: "Nov 30, 2024", stars: 5, text: "Perfect for my needs! Use it for video editing and it handles everything smoothly. Best tablet in this price range." }
                ]
            },
            mobile: {
                title: "iPhone 16 Pro",
                price: "₹1,03,999.99",
                originalPrice: "₹1,09,999.99",
                discount: "12% OFF",
                rating: "4.9 (3,456 reviews)",
                stars: 5,
                description: "The latest iPhone 16 Pro with A18 Bionic chip, ProMotion display, and advanced camera system. Features 5G connectivity, Face ID, and iOS 18 for a seamless user experience.",
                images: [
                     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpFe28rl_nuXvDvrh0WW8uJ2Le8MZmQF2gkoFM_bETuiLXmvnzHFXwi1Mg5SEjzre6EPEWscIk6cvtfSoDECnppgS8qKTM",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQkcY0Yhwtbf0mGCsRT3O00KoPAq_pKRjbbI6v4PTg3lDwGTrgfw813PzwGP7KrTr31iyfbwPqaHOfSe0_w6Tm6VqBlLNzHar4zCf-IaE-gG9IOESV_GE2gLmc",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmcJaqSYLKaYSaly6lQiDnnjYMX2GFjqdZlHAfvOrJupj2rmak115ZqfBfe0ZjVz1dEUeisnYSPjUcAQLRHtG1YNtpS-wE8A",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDXPF_cNScK93rcITV6ZYxSk5qjTFD84GaIQBI0hLAaBS3cClV7dKmtK1WZziKyTxJwp08iJg5sUOQwKs583nQPDkCBrYI14U9hjnrumjp6EH1dTPKlJ-Lgg",
                     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9hP9lpZLMxCXkuZKXYq9fnfHIlGXcgAQaDqGF-cdPPdG7wNgBFYZNRo2w49wCn9hkqZSn3KEHV_P0bi1S2uYZdduWzd5a",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxElYxgGcqjUNGu-fjVO78-qgoG6d3QA7avVZl0irSzzTYKJtSpd_A1rZPXE4kElpsNEgVqYDAq4-B1DZYvgjG4boZpURKzULIR5vded98TVueIsTQwceC2w"
                ],   
                features: [
                    { icon: "microchip", text: "<strong>A18 Bionic Chip</strong> - Fast and efficient" },
                    { icon: "mobile-alt", text: "<strong>ProMotion Display</strong> - Smooth 120Hz refresh rate" },
                    { icon: "camera", text: "<strong>Advanced Camera System</strong> - Pro-level photography" },
                    { icon: "network-wired", text: "<strong>5G Connectivity</strong> - Ultra-fast internet" },
                    { icon: "face-id", text: "<strong>Face ID</strong> - Secure authentication" }
                ],
                specs: [
                    ["Display", "6.7-inch OLED, 2778x1284"],
                    ["Processor", "A18 Bionic"],
                    ["RAM", "8GB"],
                    ["Storage", "256GB / 512GB / 1TB"],
                    ["Camera", "48MP main, 12MP ultra-wide, 12MP telephoto"],
                    ["Battery", "Up to 28 hours video playback"],
                    ["OS", "iOS 18"]
                ],
                reviews: [
                    { name: "Alice Johnson", date: "Dec 7, 2024", stars: 5, text: "The iPhone 16 Pro is incredible! The camera quality is unmatched and the performance is lightning fast. Love the new ProMotion display." },
                    { name: "Bob Smith", date: "Dec 4, 2024", stars: 5, text: "Best iPhone yet! The battery life has improved significantly and 5G connectivity is super fast. Face ID works flawlessly." },
                    { name: "Catherine Lee", date: "Dec 1, 2024", stars: 5, text: "Absolutely love this phone! The design is sleek and the A18 chip makes everything run smoothly. Highly recommend to anyone looking for a top-tier smartphone." }
                ]
            },
            ac: {
                title: "Samsung 1.5 Ton 5 Star Inverter Split AC",
                price: "₹39,999.99",
                originalPrice: "₹49,999.99",
                discount: "22% OFF",
                rating: "4.5 (1,023 reviews)",
                stars: 4.5,
                description: "Stay cool and comfortable with our LG 1.5 Ton 5 Star Inverter Split AC. Features energy-efficient inverter technology, fast cooling, and smart connectivity for remote control via smartphone app.",
                images: [
                   "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYBoQhJOreRiTEEdjI5-bjDqjs_2c7IIClbRoZ6b3nqiDgTFmFmB0SNYlsHUp4-vKPCD1aEAU0exHzf5kBX0ssZyATPoQXqgx0r_0FA2E8IzF5jVF60P6HZTk",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwNDdlF3UZAE-4O9ONRN5EVXmc-QSqCsQg4aUip8zjPYTGjG2aN8soBPV5iHTBuCT4xwsRRcvD8DGSDfpDpsM9UsrzcaGA",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGvRydwv_WvHH4ZyQ6Ld3teC7n9nC3hA97BrfyQGNJOgRcdoYJJO0jk-PRvI49cZfshM7kakQfqAqiRxu0us0G9Jjha70P"
                ],
                features: [
                    { icon: "snowflake", text: "<strong>Inverter Technology</strong> - Energy efficient cooling" },
                    { icon: "bolt", text: "<strong>Fast Cooling</strong> - Quick temperature drop" },
                    { icon: "wifi", text: "<strong>Smart Connectivity</strong> - Control via app" },
                    { icon: "leaf", text: "<strong>Eco-Friendly</strong> - Uses R32 refrigerant" },
                    { icon: "star", text: "<strong>5 Star Rating</strong> - Superior energy savings" }
                ],
                specs: [
                    ["Capacity", "1.5 Ton"],
                    ["Energy Rating", "5 Star"],
                    ["Cooling Type", "Inverter Split AC"],
                    ["Refrigerant", "R32"],
                    ["Airflow", "High-speed cooling"],
                    ["Noise Level", "Low noise operation"],
                    ["Smart Features", "Wi-Fi connectivity"]
                ],
                reviews: [
                    { name: "Sanjay Kumar", date: "Dec 5, 2024", stars: 5, text: "This AC is fantastic! Cools the room quickly and is very energy efficient. The smart features are a great addition." },
                    { name: "Anita Sharma", date: "Dec 2, 2024", stars: 4, text: "Very satisfied with my purchase. The AC is quiet and effective. The installation process was smooth as well." },
                    { name: "Rohit Verma", date: "Nov 30, 2024", stars: 5, text: "Excellent value for money. The inverter technology really helps in reducing electricity bills. Highly recommend!" }
                ]
             },
             refridgrator: {
                title: "Whirlpool Intellifresh Pro 2 Star Double Door Refrigerator",
                price: "₹34,999.99",
                originalPrice: "₹44,999.99",
                discount: "28% OFF",
                rating: "4.4 (876 reviews)",
                stars: 4,
                description: "Efficiently clean your clothes with our LG 7kg 5 Star Inverter Fully Automatic Front Load Washing Machine. Features multiple wash programs, inverter technology for energy savings, and a sleek design.",
                images: [
                 "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8acPQWylGt98EaSUca3DqSkU75GVi4PjLskVS6MuqB_CmwWPSnH5OfNtdaDFPj9V3Zg6VDbFGQSW7y_HRCIKTPtgCqwGyeLT-KEZCIe9M7SVvjfE74vj3rQ",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVfFQBah8YKM0wcKjNv8Vrz990VcoNukpSd1kB4n4eiEoDlpvFqBtUxYv0kP9u--QYXqJBVYaVECawS_bBhqTHlLuCBol10dirRUtue4_OFlwleK3kZw_u_7w",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6v9oKIWaX8wchxoFK8xASYiVYCJlKpTMEkDO6Lk0XYPKBCH5RcXVvUa3tKfEJZu3c3sHwwJn7hEwYvfjDta-pIImSDa5eGeug1D3gx_Ni9qSCKFRliztRGQ",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWaj_8q_8-jtafG4dyo7gCSmTMmzRl9Vz8jLUDxhS_nosxTZqG1cy9vu4y8FnVv26MyDh1yACFZxR-agNcHKLVGNdH-FjIKGJTe27jBuyIknE2L_lw3V47u_o",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzTYYcREHKYBSzHgn4-QOlAv1DQpJT4kf-pNqT6M2YwqOqdMAu_uoMXzvS4cqinmvQ9_bpqA_lWUK96T7FeCOaev9A6lcc3G9WSP1dEJXsGWt9cpEgAY5mqA",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREJUUi9Zi7xq5P35w07dLgKpv-cZ3UapT1ZXbOTTWhunV1KoGBsOBftOd7m9Bfk6ajdejL6bfsQ9cHREX7ZQLiQY1zFeEv2YUE_m1lWCK_",
                 "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTp_yumtfyTH2RFKnFq39TGkGp74L6FuNevdMghr5c8u2iHwC6Q7vXkiv6ynprHlJU76kAJYZpTFukAbJyiwRDWmkZ82uymnpeKrA_1G3vOq7FyFCLzdOlkuw"
                ],
                features: [
                    { icon: "tshirt", text: "<strong>7kg Capacity</strong> - Perfect for small families" },
                    { icon: "star", text: "<strong>5 Star Rating</strong> - Energy efficient" },
                    { icon: "cogs", text: "<strong>Inverter Technology</strong> - Quiet and efficient" },
                    { icon: "sync-alt", text: "<strong>Multiple Wash Programs</strong> - Customized cleaning" },
                    { icon: "shield-alt", text: "<strong>Durable Build</strong> - Long-lasting performance" }
                ],
                specs: [
                    ["Capacity", "7kg"],
                    ["Energy Rating", "5 Star"],
                    ["Type", "Fully Automatic Front Load"],
                    ["Inverter Technology", "Yes"],
                    ["Wash Programs", "Multiple"],
                    ["Spin Speed", "1200 RPM"],
                    ["Dimensions", "85 x 60 x 55 cm"]
                ],
                reviews: [
                    { name: "Priya Singh", date: "Dec 5, 2024", stars: 5, text: "This washing machine is fantastic! Cleans clothes thoroughly and is very energy efficient. The multiple wash programs are very useful." },
                    { name: "Amit Patel", date: "Dec 2, 2024", stars: 4, text: "Very satisfied with my purchase. The machine is quiet and effective. The installation process was smooth as well." },
                    { name: "Neha Gupta", date: "Nov 30, 2024", stars: 5, text: "Excellent value for money. The inverter technology really helps in reducing electricity bills. Highly recommend!" }
                ]
             },
             washingMachine: {
                title: "Samsung 7 KG Fully Automatic Front Load Washing Machine",
                price: "₹29,999.99",
                originalPrice: "₹39,999.99",
                discount: "26% OFF",
                rating: "4.6 (1,145 reviews)",
                stars: 4.5,
                description: "Efficiently clean your clothes with our LG 7kg 5 Star Inverter Fully Automatic Front Load Washing Machine. Features multiple wash programs, inverter technology for energy savings, and a sleek design.",
                images: [
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ47LeKimvNZXm4fUvcRNq5liv3mjdIMn3BnX0OxxTh4jBgEjqS3c4efmIN8jPIjClEsZ4XuWLihX2VK8JwQooxzWdc6ALP",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTie1k3lAyuaT2c0b27HYjz15Th17WV7bm_ySsAT4QAhwGZngL0IllrgK9MJM0VIBE-Vh6Nzc6nmtmZ6CHklrakYzn2k-cdzh5nIUc1PU60K1rJ3bl7bf2Z",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQTBr_m0gACGoAl_1GffXA9nJbGIeV2dBnGmonqlYbnYi816UsIoRrpJm9FVrif_moSGAgb9ZfgvTFym68FzEKDTQcNeOT9Gx7YnOSkOYgCzSIe0G2vkY4UA",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNNaV9P5d1qjAPhkjdEYFVqEcn8wbX4U88AkgkoRZFV2O6etzzULmytjCI_dRH2U53UP6cU88yJE15bnyD3ZC-USbF1fVbvpHT2rdBkvlsaoRxI5lJIgw",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjdWCw9KdbDaIHBBWmoHstQZN7cCBf5fAcA5f_IMllTsOJcjn7N9wLYXQonV7jmoxDbTuv7w6arg8XULmE-WmJljP9aCBss0IpXzxAhc0nhCZ9r6rKegc4-4jx",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGxpQ51itEN1qRTBLeik_4rQFHkkP1sVkWcN5rOTuEgyjXyZvcrbV5-7nwUQqLF8k6tRXwqAGO3ML4fm29dCID_ERUJTYbEO26I2BR0jsZMBN1e9Ur3Ex7WQ",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSc4-uLdJ8O80bRZ10Lhc6jPvg_Yu5jaAfZp77dmSXeuGS7jfBIE7fQ9HGqUPF6GBNJHyZqWO0M6gkyKZUvULjKIIKeNE77kWx1pn_ouEK7UUIhsgPVCA6vXAw",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3DLgXJkB9D90yTFAuIaYpVh5Uf-Jkizq79phSfReYg-Kz8rN5R6r_fklIAvO1w7UgO1YEBYYEoUXJQsiGkOIERFdHSafPiu-3u-uEYrZon5BiGKu1bLtRbQ",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzeySYO6Qw5D6R_7R_PPUUBRgKFQQM_DUxDUKeHrpEMEckmBPQ9xgRoLCTZFzIzxYwDgKzX-OWk6gq6qg3TwsQM_TekLnRBZSnod4eML1z1YmhVZHshFug",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFdi0trBWDPIY6wrAh4UwrNVZe8eZrH2h1gAaJqscgLIHqfaGNlW7UENBw5WlF2RawGq4EMt6dSwhQTpK_9yQGeVWMQZ-_xg9yDTvuqTZRLSfx8FzAWRuX",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQR2AJJA_zxa7u3l1wnLapdgnlJ0qu6b2zZ2pRsfqvY6US6xJY_KwxuNW1AansHkwySuh1M8feCV-nRPeKr_Vrhsdzl6I-7ZOmucB78-h_Q86VnkpB8DFiNMVA",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfQNGGZLH6_1p3Jb125LmW7hFZQKUY7_B_5dx1jrDLu-BlK_hA5vl6SM9d9SuHGBF_f_eJq9iYBwTV9Y83ddCa1kmZfZUbNjIgItSEiYFnNYLZUjv5M2RX",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwpeAJ_icglADKJwKBU1bIPyATnfHfgSQMQHR-w_3ZCFpRPW-yySdQEtkOkkr5ryLpMi5mCAUUggnxlYAu4XXOZNjwu5FM",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSD7vY3D9edlFUsJsRUw9GIoqeFlne9iP6KrVXwrlr6UehV5Of043uEYnsMl0YbUfxOm-SvC36OF2XSBzg1Z-zdxO-X7PjK"
             ],
             features: [
                    { icon: "tshirt", text: "<strong>7kg Capacity</strong> - Perfect for small families" },
                    { icon: "star", text: "<strong>5 Star Rating</strong> - Energy efficient" },
                    { icon: "cogs", text: "<strong>Inverter Technology</strong> - Quiet and efficient" },
                    { icon: "sync-alt", text: "<strong>Multiple Wash Programs</strong> - Customized cleaning" },
                    { icon: "shield-alt", text: "<strong>Durable Build</strong> - Long-lasting performance" }
                ],
                specs: [
                    ["Capacity", "7kg"],
                    ["Energy Rating", "5 Star"],
                    ["Type", "Fully Automatic Front Load"],
                    ["Inverter Technology", "Yes"],
                    ["Wash Programs", "Multiple"],
                    ["Spin Speed", "1200 RPM"],
                    ["Dimensions", "85 x 60 x 55 cm"]
                ],
                reviews: [
                    { name: "Priya Singh", date: "Dec 5, 2024", stars: 5, text: "This washing machine is fantastic! Cleans clothes thoroughly and is very energy efficient. The multiple wash programs are very useful." },
                    { name: "Amit Patel", date: "Dec 2, 2024", stars: 4, text: "Very satisfied with my purchase. The machine is quiet and effective. The installation process was smooth as well." },
                    { name: "Neha Gupta", date: "Nov 30, 2024", stars: 5, text: "Excellent value for money. The inverter technology really helps in reducing electricity bills. Highly recommend!" }
                ]
             },
            laptop: {
                title: "Acer Predator Helios Neo 14 Intel Core Ultra 7 Gaming Laptop",
                price: "₹1,12,990.00",
                originalPrice: "₹2,85,774.00",
                discount: "60% OFF",
                rating: "4.8 (2,345 reviews)",  
                stars: 4.5,
                description: "Experience top-tier gaming performance with the Acer Predator Helios Neo 14. Equipped with the latest Intel Core Ultra 7 processor and NVIDIA GeForce RTX graphics, this laptop delivers stunning visuals and smooth gameplay. Features a 14-inch Full HD display with a 144Hz refresh rate, advanced cooling technology, and customizable RGB keyboard lighting.",
                images: [
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6YqI8lFKkCzy2zYWmecMDN77tpVkqDwcyrrvziL1_dj-K5Oo__56U41rcNdwRu6i7Egy0w743ISn7bIXfC2mfio3mpedwuPa3RUoDyuAuc7CyX4GMU4vE",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJX0GDUQiZwKYEkZn3PJAXZEkInUaZimMdttuttNU3q_v8UUknkRjmnPoOExSsBUl_JD9mZQM_amSog1MDgmyat3uYPESuOhsvHTauby3p",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRs0KhtkEcT4Ew_aNrd7FaMMjWarGKBYG_bJCktr98Nt0eHGeLoKwlkGK8LgUV9jne_CW8NTpzBF0eTTYlgTuECAvI7PFcqa7u-7yfklXs",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvLc12CrzfM3Liij7j0VJOtM_q45WMCyzFs0CMELiee4MX2XTw6DVQrfo1fJ3tVtACbkdn3pQ0dgBsmrFlVWctH5a3yiS6OPq6W0UIsvc",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS21zJeERLt0mxz7b3XW9rSGYDTvT2TvsG7rtIIGBV3tjqO42fiTGwj_yuqnPT0AipRYBmbqIKv6fmVZR4Iot76k7ap1w-EnE9Ml-xZdNMi",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKJ8ZCBqo_uUwCQh9gRmCTle_Wnou3hjuy4CXFIY9In5V_tu1zPRhKAvtjumeI5Ix-oh3jlPS0CVob4p7fCGYnIkrTvL46GFYCR0z7738",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqPsyRfzAQuTOpeKCjP-513f4xaNwhZBB1syaTJBoPfhFkqxK_1sOuUVUydNxykuUvijBse2omt2kiHEAsloY-jOwU9CmogVm7uN2sN6rQWK9EcGwtCzxp",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMuTk3s_4e5_RHCfUb8RiZCJ2ZliL4JYQsXZL1cdNwdm4Vf0AmpyqSKlRjQj1k5_3u2Jee3lJpTJeamBo4nFFGXPr8FyKxmPtPIfUx2K-l",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGcydlhq-q77wZWDbv8dyJSngI3qHgFv0Ig4YcodAOGNKmKTUoUphiAGEnjy1tfrSJLd0wsJME3LWIvn7hmYAlHqMOatKd",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRM-L0Ay464ZtBXAqIMkOiLTCxhPAVQtIw8sjIVzxQTD7EQITec9GguI7DW4SiKuWFcnp2rIUVRffItWYvnAwcqNM5Q-LDo",
                    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcU3bs64WDAnIIWuFPP2CgjeLnJyQNxwIAbAFf7RWi5kAoXnYdqTwJRRO24_ri97p6cxPCTY4NU9IWUMhWBp8O0-aGiYc3vQ"
            ],
            features: [
                    { icon: "microchip", text: "<strong>Intel Core Ultra 7</strong> - High performance" },
                    { icon: "gamepad", text: "<strong>NVIDIA GeForce RTX</strong> - Stunning graphics" },
                    { icon: "display", text: "<strong>14-inch FHD</strong> - 144Hz refresh rate" },
                    { icon: "snowflake", text: "<strong>Advanced Cooling</strong> - Keeps you cool" },
                    { icon: "keyboard", text: "<strong>RGB Backlit Keyboard</strong> - Customizable lighting" }
                ],
                specs: [
                    ["Processor", "Intel Core Ultra 7"],
                    ["Graphics", "NVIDIA GeForce RTX 4060"],
                    ["Display", "14-inch Full HD, 144Hz"],
                    ["RAM", "16GB DDR5"],
                    ["Storage", "512GB NVMe SSD"],
                    ["Battery Life", "Up to 8 hours"],
                    ["Operating System", "Windows 11 Home"]
                ],
                reviews: [
                    { name: "Rajat Singh", date: "Dec 8, 2024", stars: 5, text: "The Acer Predator Helios Neo 14 is a beast! Handles all my games at high settings without any lag. The cooling system works great too." },
                    { name: "Sneha Verma", date: "Dec 5, 2024", stars: 4, text: "Amazing laptop for gaming and productivity. The display is vibrant and the performance is top-notch. Highly recommend!" },
                    { name: "Arjun Mehta", date: "Dec 2, 2024", stars: 5, text: "Best gaming laptop I've owned so far. The build quality is solid and the keyboard is comfortable for long gaming sessions." }
                ]
            },
               androidWatch: {
                title: "boAt Lunar Discovery Smartwatch",
                price: "₹1,199.00",
                originalPrice: "₹1,499.00",
                discount: "15% OFF",
                rating: "4.3 (654 reviews)",
                stars: 4,
                description: "Stay connected and track your fitness with the boAt Lunar Discovery Smartwatch. Features a vibrant display, multiple sports modes, heart rate monitoring, sleep tracking, and smartphone notifications. Water-resistant design makes it perfect for everyday use.",
                images: [
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBbgxwRTzG3IxwBnUd0HaYl2oSzc01aL9PPXUMqYlSk14akhRYXlGQ_327lFSIkojaktCI0YjvbpdnPUHn3l1z7yzwUzcMyU-jdkL_6-vTnyFMXqgAhJ-Seg",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIXhAMoKSRxZMKpMddd-RgSTIQcfDJB1Djd7kxnft8rH_uujyv6QxQ9tBqglcR9XfJ2woMGPgCiE2CQyea-aiyomdqBbfCgaftBIlACBSf4M8difdLHpbV",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0KemuhGDLIb3Md2GepveawzfzaAyyqiPo-OOq-_WUpeoATvwq6ov1JHe7Qv_473_TeIjTa2-GXhR1gsHrBgsgGC0S3n6HQbx5dYHspJEseYQ0jUv0QYH8",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRepa4Cx9r7HPD0qGCPzp7oVIEPn7Xr5kEGUmK9woq1qbJmdO3KLCv0Ml-MnOeX3jZkcDMguC2zoMnrDkCuGTwblvGzXSl3jUhTZ78JoXmsh1FBZpPjRV_INQ",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSjxyxiSVhYCRu40U48JCjudAwFt6XOo1s2_aobLyiMJPBX-27mI9soNTuScPPTTUwJnL7QGIQCgtizsbYBwa7VxZEIxgKVgmlUf-Q8XSU1OGRsWFyf8_3nLg",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgBsCWk3JqIwr6EZjdzqIht99u2-1BjKd9XIMglFV2NAxi1V-_KJ1Tj1sNMeUXbBu0R4OURrtxrYjIk6N-MDxxsa3RvfdKJA",
                    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlr5VnS1q8nsABgXxDtjLCdQ-YRk3F8k7HjoLxRxaEUKlIgFNx70d-rYfh-fUGrAAN9i0RX7b7LAvPwUec6IdyYkT4ZFG4",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbbqroH-5NSFVY8VpI1AGUh9Od-gLJz41ZThi3JJTeYHgvvBRNhGQ9zS6K6P9GHGAse1sEB6S3fMpxLAkW6oCDCU2e5zRk",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTj6gmKiqR90CgBD-9X87nIkwfHEY1Ma7HgH5G_0uh3uzISBFMqVNf646zyLevnG8k7EcmmVNe1gerJVYo_vXtOIBlxoc7t",
                    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQh0eF2FNXOTCg07OQmYCVUDwOSSURxpU_SchyuYviC3F9ECsgjJsDiMH-nTNNtgNaN7CULMyGW6Tj1d-54APKIX6wTKDlt7g",
                    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRO0-UoIoha0f-scKf_BLHor8Is3sLnqskQHDnmvVZEcPi6e3RSKszgUOtv7VuCbT-T5ykbfiW28SukHl2rgAjDLvZnQ-RcyQ"
            ],
            features: [
                    { icon: "heart", text: "<strong>Health Monitoring</strong> - Heart rate & sleep tracking" },
                    { icon: "running", text: "<strong>Multiple Sports Modes</strong> - Track various activities" },
                    { icon: "water", text: "<strong>Water Resistant</strong> - Suitable for everyday use" },
                    { icon: "bell", text: "<strong>Smart Notifications</strong> - Stay connected" },
                    { icon: "battery-full", text: "<strong>Long Battery Life</strong> - Up to 7 days" }
                ],
                specs: [
                    ["Display", "1.3-inch TFT LCD"],
                    ["Battery Life", "Up to 7 days"],
                    ["Water Resistance", "IP68 Rated"],
                    ["Connectivity", "Bluetooth 5.0"],
                    ["Sensors", "Heart Rate, Accelerometer"],
                    ["Compatibility", "Android & iOS"],
                    ["Strap Material", "Silicone"]
                ],
                reviews: [
                    { name: "Karan Johar", date: "Dec 6, 2024", stars: 5, text: "Great smartwatch for the price! Tracks my workouts accurately and the battery lasts long. Very happy with my purchase." },
                    { name: "Meera Nair", date: "Dec 3, 2024", stars: 4, text: "Good features and easy to use. The display is clear and the watch looks stylish. Would recommend it to others." },
                    { name: "Vikram Singh", date: "Nov 29, 2024", stars: 5, text: "Excellent value for money. The health monitoring features are very useful and the watch is comfortable to wear all day." }
                ]
            },
            earbuds2: {
                title: "CMF by Nothing Neckband Pro 50dB Active Noise Cancellation",
                price: "₹1,999.00",
                originalPrice: "₹1,499.00",
                discount: "35% OFF",
                rating: "4.5 (1,234 reviews)",
                stars: 4.5,
                description: "Experience immersive sound with the CMF by Nothing Neckband Pro. Featuring 50dB active noise cancellation, these neckband earphones deliver crystal-clear audio and deep bass. Enjoy up to 20 hours of playback, comfortable fit, and quick charging capabilities.",
                images: [
                  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQY_3k2zW4KSYN-VAI0F52duOC2JtHViTl2bnpoEuNoHBH1gvilyB6ZMaVtrHiQdgygv1ztZYhfPHfVPa0KRLCL4T5ZAy3p",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyj78t2KSQS4mosmud2qaKDpiLXpgmKhq3fjNlUIndhrimyArbLB6MvLfTy7dUiPN3Hbl2S6B7YY8wdtmLBZW_FWI-YB0HNGTjLCj6FxrkIO8lxiWcmVneW3k",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQB_dmQ07Ee-mliRiSa4pdbI9YZuQjySVmW6IU4lE137NwBqeBpaloqXSgilmO5q2SO70UzRuaVc_hJYkGP_5ZVijGJhbNghoN0ZDXuCZ8nlE3LH30hahe7",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRktYd7S1szC6xfk5xKslZu7NAx0fUYmnY4X6_zzzsn9oH2kl0ImOr8i4Kdh4HnLnI3BHt7DyHH0OIc5vC6xlLnB1hL7bB6RGrMvhj6xi6_SM4mA-AQr74VtQ",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSJr_5RahcjZg_UNskvi9m5j0M8eLbKTC9rv41c4pU-nBd4dZvgiG03cNdcqxLrfyORBg7TDQe8wSN0AmV2C0Dbl6iPVT4hvvkNFBThfE",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJCLcfc7xHcRSNIQxSuuHlPPuAssl0h9P69VkTRIMqSmS8Cmwgeg1X-yS64uXUKn7qhK62OFpi-0WaSnf_hCsorFWDSM0-vWkA3TjgIf-cThtgMjub3Dovmw",
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbTxYMguGfApsnh8YDC1CFqjISicylOE3tQfjtqeUiaw90dwjsbdhuw-jdMjzD2q1Mqkjyh389M2Tp_PMxnYpggF0GFcPM9Mm93xhhXmC4jTCogoeoNdnvJg",
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqcOurp3xJr3NXEhRjcBCOD0hCVtjicR-KwXiUwXFx-6nQ3wqDWzkY-1Lxb_VDOru0EFdk53FvRB197UWsZP4ouCWhZsilVWOlfCJ9MunkROBACd5rFC3reA",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2dmpQDYsKY69ohXyjjeUIYvaT8FIkCTckJHIeF3IvcrYlMDyRO8avGm3yzxgwXu8RSzT5xw8w88yC8eb1eQcQgs9meMoS4A",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1GKvHmi65IIZ8AHImg1vh94bQV225Y4u0p0BgGzJx1Y2GXjCgIqFRmTKXzmegfyIHKnIFnwsaqToaojRJi9zsZvKnErlV",
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnBDuSNJ2ZxxkxR36bvjDXHLjdFaLrBKbMMuVsbH1Jiee8PbujK1NLQw35tW5kbpDSKKIv7zneC5hUaJ_gaBGhT8gvluwUcg",
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTA7xdetl5YIlYx63-dCcT8KC_-LCv9PrytoMHBO6hWmgPFByC-1WDbJoriorKqkdeMsdM0Qh_TRTdtwQv4QPZ-C3GILwhE"
            ],
            features: [
                    { icon: "music", text: "<strong>50dB Active Noise Cancellation</strong> - Immersive sound" },
                    { icon: "battery-full", text: "<strong>20 Hours Playback</strong> - Long-lasting battery" },
                    { icon: "bolt", text: "<strong>Quick Charge</strong> - 10 mins for 2 hours playtime" },
                    { icon: "bluetooth", text: "<strong>Bluetooth 5.2</strong> - Stable connectivity" },
                    { icon: "ear", text: "<strong>Ergonomic Design</strong> - Comfortable fit" }
                ],
                specs: [
                    ["Driver Size", "10mm"],
                    ["Active Noise Cancellation", "50dB"],
                    ["Battery Life", "Up to 20 hours"],
                    ["Charging Time", "1.5 hours"],
                    ["Connectivity", "Bluetooth 5.2"],
                    ["Water Resistance", "IPX4 Rated"],
                    ["Weight", "28g"]
                ],
                reviews: [
                    { name: "Anjali Rao", date: "Dec 7, 2024", stars: 5, text: "These neckband earphones are amazing! The noise cancellation works really well and the sound quality is top-notch. Battery life is impressive too." },
                    { name: "Rohit Sharma", date: "Dec 4, 2024", stars: 4, text: "Very comfortable to wear and the fit is great. The quick charge feature is very handy when I'm in a hurry." },
                    { name: "Sana Khan", date: "Nov 28, 2024", stars: 5, text: "Excellent value for money. The Bluetooth connectivity is stable and the ergonomic design makes it perfect for long listening sessions." }
                ]
            }
            };
    


        // Show product detail page
function showProductDetail(productId) {
    const product = productData[productId];
    currentProductId = productId;
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('productDetailPage').style.display = 'block';
    window.scrollTo(0, 0);

    document.getElementById('detailTitle').textContent = product.title;
    document.getElementById('detailPrice').textContent = product.price;
    document.getElementById('detailOriginalPrice').textContent = product.originalPrice;
    document.getElementById('detailDiscount').textContent = product.discount;
    document.getElementById('detailRating').textContent = product.rating;
    document.getElementById('detailDescription').textContent = product.description;

    const starsHtml = generateStars(product.stars);
    document.getElementById('detailStars').innerHTML = starsHtml;

    document.getElementById('mainImage').src = product.images[0];

    const thumbnailHtml = product.images.map((img, index) => 
        `<img src="${img}" alt="View ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeImage(this)">`
    ).join('');
    document.getElementById('thumbnailContainer').innerHTML = thumbnailHtml;

    const featuresHtml = product.features.map(f => 
        `<li><i class="fas fa-${f.icon}"></i> ${f.text}</li>`
    ).join('');
    document.getElementById('featureList').innerHTML = featuresHtml;

    const specsHtml = product.specs.map(spec => 
        `<tr><td>${spec[0]}</td><td>${spec[1]}</td></tr>`
    ).join('');
    document.getElementById('specsTable').innerHTML = specsHtml;

    const reviewsHtml = product.reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <span class="reviewer-name"><i class="fas fa-user-circle"></i> ${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-stars">${generateStars(review.stars)}</div>
            <p class="mb-0">${review.text}</p>
        </div>
    `).join('');
    document.getElementById('reviewsContainer').innerHTML = reviewsHtml;
}

// Generate star ratings
function generateStars(rating) {
    let html = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }
    return html;
}

// Show home page
function showHomePage() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('productDetailPage').style.display = 'none';
    window.scrollTo(0, 0);
}

// Change product image
function changeImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
    
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.src = thumbnail.src;
        mainImage.style.opacity = '1';
    }, 200);
}

// Increase quantity
function increaseQty() {
    const qtyInput = document.getElementById('quantity');
    let currentQty = parseInt(qtyInput.value);
    if (currentQty < 10) {
        qtyInput.value = currentQty + 1;
    }
}

// Decrease quantity
function decreaseQty() {
    const qtyInput = document.getElementById('quantity');
    let currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
    }
}

// Add product to cart
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = productData[currentProductId];
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === currentProductId);
    
    if (existingItemIndex > -1) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: currentProductId,
            name: product.title,
            price: parseFloat(product.price.replace('₹', '').replace(',', '')),
            image: product.images[0],
            quantity: quantity
        });
    }
    
    updateCart();
    
    // Show success toast
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

//buy now function
function buyNow() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = productData[currentProductId];
    const totalPrice = parseFloat(product.price.replace('₹', '').replace(',', '')) * quantity;
    alert(`Thank you for your purchase!\n\nProduct: ${product.title}\nQuantity: ${quantity}\nTotal Price: ₹${totalPrice.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
}

// Update cart display
function updateCart() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
    
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartFooter = document.getElementById('cartFooter');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        const cartHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name.substring(0, 40)}...</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    <div class="cart-item-qty">
                        <button class="cart-qty-btn" onclick="updateItemQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="updateItemQty(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        cartItemsContainer.innerHTML = cartHTML;
        cartFooter.style.display = 'block';
        
        // Calculate and display total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cartTotalPrice').textContent = `₹${total.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
}

// Update item quantity in cart
function updateItemQty(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Toggle cart sidebar
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) return;
    
    let itemsList = cart.map(item => `${item.name.substring(0, 30)}... x${item.quantity}`).join('\n');
    alert(`Proceeding to checkout...\n\nTotal: ${document.getElementById('cartTotalPrice').textContent}\n\nItems (${cart.length}):\n${itemsList}`);
}

// Filter products by category
function filterProducts(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

}

