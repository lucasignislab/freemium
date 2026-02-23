import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Check } from "lucide-react";

const countries = [
    { code: "AF", flag: "🇦🇫", name: "Afeganistão", dial: "+93" },
    { code: "ZA", flag: "🇿🇦", name: "África do Sul", dial: "+27" },
    { code: "AL", flag: "🇦🇱", name: "Albânia", dial: "+355" },
    { code: "DE", flag: "🇩🇪", name: "Alemanha", dial: "+49" },
    { code: "AD", flag: "🇦🇩", name: "Andorra", dial: "+376" },
    { code: "AO", flag: "🇦🇴", name: "Angola", dial: "+244" },
    { code: "AI", flag: "🇦🇮", name: "Anguilla", dial: "+1-264" },
    { code: "AQ", flag: "🇦🇶", name: "Antártida", dial: "+672" },
    { code: "AG", flag: "🇦🇬", name: "Antígua e Barbuda", dial: "+1-268" },
    { code: "SA", flag: "🇸🇦", name: "Arábia Saudita", dial: "+966" },
    { code: "DZ", flag: "🇩🇿", name: "Argélia", dial: "+213" },
    { code: "AR", flag: "🇦🇷", name: "Argentina", dial: "+54" },
    { code: "AM", flag: "🇦🇲", name: "Armênia", dial: "+374" },
    { code: "AW", flag: "🇦🇼", name: "Aruba", dial: "+297" },
    { code: "AU", flag: "🇦🇺", name: "Austrália", dial: "+61" },
    { code: "AT", flag: "🇦🇹", name: "Áustria", dial: "+43" },
    { code: "AZ", flag: "🇦🇿", name: "Azerbaijão", dial: "+994" },
    { code: "BS", flag: "🇧🇸", name: "Bahamas", dial: "+1-242" },
    { code: "BH", flag: "🇧🇭", name: "Bahrein", dial: "+973" },
    { code: "BD", flag: "🇧🇩", name: "Bangladesh", dial: "+880" },
    { code: "BB", flag: "🇧🇧", name: "Barbados", dial: "+1-246" },
    { code: "BY", flag: "🇧🇾", name: "Bielorrússia", dial: "+375" },
    { code: "BE", flag: "🇧🇪", name: "Bélgica", dial: "+32" },
    { code: "BZ", flag: "🇧🇿", name: "Belize", dial: "+501" },
    { code: "BJ", flag: "🇧🇯", name: "Benim", dial: "+229" },
    { code: "BM", flag: "🇧🇲", name: "Bermudas", dial: "+1-441" },
    { code: "BO", flag: "🇧🇴", name: "Bolívia", dial: "+591" },
    { code: "BA", flag: "🇧🇦", name: "Bósnia e Herzegovina", dial: "+387" },
    { code: "BW", flag: "🇧🇼", name: "Botsuana", dial: "+267" },
    { code: "BR", flag: "🇧🇷", name: "Brasil", dial: "+55" },
    { code: "BN", flag: "🇧🇳", name: "Brunei", dial: "+673" },
    { code: "BG", flag: "🇧🇬", name: "Bulgária", dial: "+359" },
    { code: "BF", flag: "🇧🇫", name: "Burkina Faso", dial: "+226" },
    { code: "BI", flag: "🇧🇮", name: "Burundi", dial: "+257" },
    { code: "BT", flag: "🇧🇹", name: "Butão", dial: "+975" },
    { code: "CV", flag: "🇨🇻", name: "Cabo Verde", dial: "+238" },
    { code: "CM", flag: "🇨🇲", name: "Camarões", dial: "+237" },
    { code: "KH", flag: "🇰🇭", name: "Camboja", dial: "+855" },
    { code: "CA", flag: "🇨🇦", name: "Canadá", dial: "+1" },
    { code: "QA", flag: "🇶🇦", name: "Catar", dial: "+974" },
    { code: "KZ", flag: "🇰🇿", name: "Cazaquistão", dial: "+7" },
    { code: "TD", flag: "🇹🇩", name: "Chade", dial: "+235" },
    { code: "CL", flag: "🇨🇱", name: "Chile", dial: "+56" },
    { code: "CN", flag: "🇨🇳", name: "China", dial: "+86" },
    { code: "CY", flag: "🇨🇾", name: "Chipre", dial: "+357" },
    { code: "CO", flag: "🇨🇴", name: "Colômbia", dial: "+57" },
    { code: "KM", flag: "🇰🇲", name: "Comores", dial: "+269" },
    { code: "CG", flag: "🇨🇬", name: "Congo - Brazzaville", dial: "+242" },
    { code: "CD", flag: "🇨🇩", name: "Congo - Kinshasa", dial: "+243" },
    { code: "KP", flag: "🇰🇵", name: "Coreia do Norte", dial: "+850" },
    { code: "KR", flag: "🇰🇷", name: "Coreia do Sul", dial: "+82" },
    { code: "CI", flag: "🇨🇮", name: "Costa do Marfim", dial: "+225" },
    { code: "CR", flag: "🇨🇷", name: "Costa Rica", dial: "+506" },
    { code: "HR", flag: "🇭🇷", name: "Croácia", dial: "+385" },
    { code: "CU", flag: "🇨🇺", name: "Cuba", dial: "+53" },
    { code: "CW", flag: "🇨🇼", name: "Curaçao", dial: "+599" },
    { code: "DK", flag: "🇩🇰", name: "Dinamarca", dial: "+45" },
    { code: "DJ", flag: "🇩🇯", name: "Djibuti", dial: "+253" },
    { code: "DM", flag: "🇩🇲", name: "Dominica", dial: "+1-767" },
    { code: "EG", flag: "🇪🇬", name: "Egito", dial: "+20" },
    { code: "SV", flag: "🇸🇻", name: "El Salvador", dial: "+503" },
    { code: "AE", flag: "🇦🇪", name: "Emirados Árabes Unidos", dial: "+971" },
    { code: "EC", flag: "🇪🇨", name: "Equador", dial: "+593" },
    { code: "ER", flag: "🇪🇷", name: "Eritreia", dial: "+291" },
    { code: "SK", flag: "🇸🇰", name: "Eslováquia", dial: "+421" },
    { code: "SI", flag: "🇸🇮", name: "Eslovênia", dial: "+386" },
    { code: "ES", flag: "🇪🇸", name: "Espanha", dial: "+34" },
    { code: "US", flag: "🇺🇸", name: "Estados Unidos", dial: "+1" },
    { code: "EE", flag: "🇪🇪", name: "Estônia", dial: "+372" },
    { code: "SZ", flag: "🇸🇿", name: "Eswatini", dial: "+268" },
    { code: "ET", flag: "🇪🇹", name: "Etiópia", dial: "+251" },
    { code: "RU", flag: "🇷🇺", name: "Rússia", dial: "+7" },
    { code: "FJ", flag: "🇫🇯", name: "Fiji", dial: "+679" },
    { code: "PH", flag: "🇵🇭", name: "Filipinas", dial: "+63" },
    { code: "FI", flag: "🇫🇮", name: "Finlândia", dial: "+358" },
    { code: "FR", flag: "🇫🇷", name: "França", dial: "+33" },
    { code: "GA", flag: "🇬🇦", name: "Gabão", dial: "+241" },
    { code: "GM", flag: "🇬🇲", name: "Gâmbia", dial: "+220" },
    { code: "GH", flag: "🇬🇭", name: "Gana", dial: "+233" },
    { code: "GE", flag: "🇬🇪", name: "Geórgia", dial: "+995" },
    { code: "GI", flag: "🇬🇮", name: "Gibraltar", dial: "+350" },
    { code: "GD", flag: "🇬🇩", name: "Granada", dial: "+1-473" },
    { code: "GR", flag: "🇬🇷", name: "Grécia", dial: "+30" },
    { code: "GL", flag: "🇬🇱", name: "Groenlândia", dial: "+299" },
    { code: "GP", flag: "🇬🇵", name: "Guadalupe", dial: "+590" },
    { code: "GU", flag: "🇬🇺", name: "Guam", dial: "+1-671" },
    { code: "GT", flag: "🇬🇹", name: "Guatemala", dial: "+502" },
    { code: "GF", flag: "🇬🇫", name: "Guiana Francesa", dial: "+594" },
    { code: "GY", flag: "🇬🇾", name: "Guiana", dial: "+592" },
    { code: "GN", flag: "🇬🇳", name: "Guiné", dial: "+224" },
    { code: "GW", flag: "🇬🇼", name: "Guiné-Bissau", dial: "+245" },
    { code: "GQ", flag: "🇬🇶", name: "Guiné Equatorial", dial: "+240" },
    { code: "HT", flag: "🇭🇹", name: "Haiti", dial: "+509" },
    { code: "HN", flag: "🇭🇳", name: "Honduras", dial: "+504" },
    { code: "HK", flag: "🇭🇰", name: "Hong Kong", dial: "+852" },
    { code: "HU", flag: "🇭🇺", name: "Hungria", dial: "+36" },
    { code: "YE", flag: "🇾🇪", name: "Iêmen", dial: "+967" },
    { code: "KY", flag: "🇰🇾", name: "Ilhas Cayman", dial: "+1-345" },
    { code: "CK", flag: "🇨🇰", name: "Ilhas Cook", dial: "+682" },
    { code: "FO", flag: "🇫🇴", name: "Ilhas Faroé", dial: "+298" },
    { code: "FK", flag: "🇫🇰", name: "Ilhas Malvinas", dial: "+500" },
    { code: "MH", flag: "🇲🇭", name: "Ilhas Marshall", dial: "+692" },
    { code: "SB", flag: "🇸🇧", name: "Ilhas Salomão", dial: "+677" },
    { code: "VG", flag: "🇻🇬", name: "Ilhas Virgens Britânicas", dial: "+1-284" },
    { code: "VI", flag: "🇻🇮", name: "Ilhas Virgens dos EUA", dial: "+1-340" },
    { code: "IN", flag: "🇮🇳", name: "Índia", dial: "+91" },
    { code: "ID", flag: "🇮🇩", name: "Indonésia", dial: "+62" },
    { code: "IR", flag: "🇮🇷", name: "Irã", dial: "+98" },
    { code: "IQ", flag: "🇮🇶", name: "Iraque", dial: "+964" },
    { code: "IE", flag: "🇮🇪", name: "Irlanda", dial: "+353" },
    { code: "IS", flag: "🇮🇸", name: "Islândia", dial: "+354" },
    { code: "IL", flag: "🇮🇱", name: "Israel", dial: "+972" },
    { code: "IT", flag: "🇮🇹", name: "Itália", dial: "+39" },
    { code: "JM", flag: "🇯🇲", name: "Jamaica", dial: "+1-876" },
    { code: "JP", flag: "🇯🇵", name: "Japão", dial: "+81" },
    { code: "JE", flag: "🇯🇪", name: "Jersey", dial: "+44" },
    { code: "JO", flag: "🇯🇴", name: "Jordânia", dial: "+962" },
    { code: "KW", flag: "🇰🇼", name: "Kuwait", dial: "+965" },
    { code: "LA", flag: "🇱🇦", name: "Laos", dial: "+856" },
    { code: "LS", flag: "🇱🇸", name: "Lesoto", dial: "+266" },
    { code: "LV", flag: "🇱🇻", name: "Letônia", dial: "+371" },
    { code: "LB", flag: "🇱🇧", name: "Líbano", dial: "+961" },
    { code: "LR", flag: "🇱🇷", name: "Libéria", dial: "+231" },
    { code: "LY", flag: "🇱🇾", name: "Líbia", dial: "+218" },
    { code: "LI", flag: "🇱🇮", name: "Liechtenstein", dial: "+423" },
    { code: "LT", flag: "🇱🇹", name: "Lituânia", dial: "+370" },
    { code: "LU", flag: "🇱🇺", name: "Luxemburgo", dial: "+352" },
    { code: "MO", flag: "🇲🇴", name: "Macau", dial: "+853" },
    { code: "MK", flag: "🇲🇰", name: "Macedônia do Norte", dial: "+389" },
    { code: "MG", flag: "🇲🇬", name: "Madagascar", dial: "+261" },
    { code: "MY", flag: "🇲🇾", name: "Malásia", dial: "+60" },
    { code: "MW", flag: "🇲🇼", name: "Malawi", dial: "+265" },
    { code: "MV", flag: "🇲🇻", name: "Maldivas", dial: "+960" },
    { code: "ML", flag: "🇲🇱", name: "Mali", dial: "+223" },
    { code: "MT", flag: "🇲🇹", name: "Malta", dial: "+356" },
    { code: "IM", flag: "🇮🇲", name: "Ilha de Man", dial: "+44" },
    { code: "MA", flag: "🇲🇦", name: "Marrocos", dial: "+212" },
    { code: "MQ", flag: "🇲🇶", name: "Martinica", dial: "+596" },
    { code: "MU", flag: "🇲🇺", name: "Maurício", dial: "+230" },
    { code: "MR", flag: "🇲🇷", name: "Mauritânia", dial: "+222" },
    { code: "YT", flag: "🇾🇹", name: "Mayotte", dial: "+262" },
    { code: "MX", flag: "🇲🇽", name: "México", dial: "+52" },
    { code: "FM", flag: "🇫🇲", name: "Micronésia", dial: "+691" },
    { code: "MZ", flag: "🇲🇿", name: "Moçambique", dial: "+258" },
    { code: "MD", flag: "🇲🇩", name: "Moldávia", dial: "+373" },
    { code: "MC", flag: "🇲🇨", name: "Mônaco", dial: "+377" },
    { code: "MN", flag: "🇲🇳", name: "Mongólia", dial: "+976" },
    { code: "ME", flag: "🇲🇪", name: "Montenegro", dial: "+382" },
    { code: "MS", flag: "🇲🇸", name: "Montserrat", dial: "+1-664" },
    { code: "MM", flag: "🇲🇲", name: "Myanmar (Birmânia)", dial: "+95" },
    { code: "NA", flag: "🇳🇦", name: "Namíbia", dial: "+264" },
    { code: "NR", flag: "🇳🇷", name: "Nauru", dial: "+674" },
    { code: "NP", flag: "🇳🇵", name: "Nepal", dial: "+977" },
    { code: "NI", flag: "🇳🇮", name: "Nicarágua", dial: "+505" },
    { code: "NE", flag: "🇳🇪", name: "Níger", dial: "+227" },
    { code: "NG", flag: "🇳🇬", name: "Nigéria", dial: "+234" },
    { code: "NU", flag: "🇳🇺", name: "Niue", dial: "+683" },
    { code: "NO", flag: "🇳🇴", name: "Noruega", dial: "+47" },
    { code: "NC", flag: "🇳🇨", name: "Nova Caledônia", dial: "+687" },
    { code: "NZ", flag: "🇳🇿", name: "Nova Zelândia", dial: "+64" },
    { code: "OM", flag: "🇴🇲", name: "Omã", dial: "+968" },
    { code: "NL", flag: "🇳🇱", name: "Países Baixos", dial: "+31" },
    { code: "PW", flag: "🇵🇼", name: "Palau", dial: "+680" },
    { code: "PS", flag: "🇵🇸", name: "Palestina", dial: "+970" },
    { code: "PA", flag: "🇵🇦", name: "Panamá", dial: "+507" },
    { code: "PG", flag: "🇵🇬", name: "Papua-Nova Guiné", dial: "+675" },
    { code: "PK", flag: "🇵🇰", name: "Paquistão", dial: "+92" },
    { code: "PY", flag: "🇵🇾", name: "Paraguai", dial: "+595" },
    { code: "PE", flag: "🇵🇪", name: "Peru", dial: "+51" },
    { code: "PF", flag: "🇵🇫", name: "Polinésia Francesa", dial: "+689" },
    { code: "PL", flag: "🇵🇱", name: "Polônia", dial: "+48" },
    { code: "PR", flag: "🇵🇷", name: "Porto Rico", dial: "+1-787" },
    { code: "PT", flag: "🇵🇹", name: "Portugal", dial: "+351" },
    { code: "KE", flag: "🇰🇪", name: "Quênia", dial: "+254" },
    { code: "KG", flag: "🇰🇬", name: "Quirguistão", dial: "+996" },
    { code: "GB", flag: "🇬🇧", name: "Reino Unido", dial: "+44" },
    { code: "CF", flag: "🇨🇫", name: "República Centro-Africana", dial: "+236" },
    { code: "DO", flag: "🇩🇴", name: "República Dominicana", dial: "+1-809" },
    { code: "RE", flag: "🇷🇪", name: "Reunião", dial: "+262" },
    { code: "RO", flag: "🇷🇴", name: "Romênia", dial: "+40" },
    { code: "RW", flag: "🇷🇼", name: "Ruanda", dial: "+250" },
    { code: "EH", flag: "🇪🇭", name: "Saara Ocidental", dial: "+212" },
    { code: "WS", flag: "🇼🇸", name: "Samoa", dial: "+685" },
    { code: "AS", flag: "🇦🇸", name: "Samoa Americana", dial: "+1-684" },
    { code: "SM", flag: "🇸🇲", name: "San Marino", dial: "+378" },
    { code: "SH", flag: "🇸🇭", name: "Santa Helena", dial: "+290" },
    { code: "LC", flag: "🇱🇨", name: "Santa Lúcia", dial: "+1-758" },
    { code: "BL", flag: "🇧🇱", name: "São Bartolomeu", dial: "+590" },
    { code: "KN", flag: "🇰🇳", name: "São Cristóvão e Névis", dial: "+1-869" },
    { code: "MF", flag: "🇲🇫", name: "São Martinho", dial: "+590" },
    { code: "PM", flag: "🇵🇲", name: "São Pedro e Miquelon", dial: "+508" },
    { code: "ST", flag: "🇸🇹", name: "São Tomé e Príncipe", dial: "+239" },
    { code: "VC", flag: "🇻🇨", name: "São Vicente e Granadinas", dial: "+1-784" },
    { code: "SN", flag: "🇸🇳", name: "Senegal", dial: "+221" },
    { code: "SL", flag: "🇸🇱", name: "Serra Leoa", dial: "+232" },
    { code: "RS", flag: "🇷🇸", name: "Sérvia", dial: "+381" },
    { code: "SC", flag: "🇸🇨", name: "Seicheles", dial: "+248" },
    { code: "SG", flag: "🇸🇬", name: "Singapura", dial: "+65" },
    { code: "SY", flag: "🇸🇾", name: "Síria", dial: "+963" },
    { code: "SO", flag: "🇸🇴", name: "Somália", dial: "+252" },
    { code: "LK", flag: "🇱🇰", name: "Sri Lanka", dial: "+94" },
    { code: "SD", flag: "🇸🇩", name: "Sudão", dial: "+249" },
    { code: "SS", flag: "🇸🇸", name: "Sudão do Sul", dial: "+211" },
    { code: "SE", flag: "🇸🇪", name: "Suécia", dial: "+46" },
    { code: "CH", flag: "🇨🇭", name: "Suíça", dial: "+41" },
    { code: "SR", flag: "🇸🇷", name: "Suriname", dial: "+597" },
    { code: "TJ", flag: "🇹🇯", name: "Tajiquistão", dial: "+992" },
    { code: "TH", flag: "🇹🇭", name: "Tailândia", dial: "+66" },
    { code: "TW", flag: "🇹🇼", name: "Taiwan", dial: "+886" },
    { code: "TZ", flag: "🇹🇿", name: "Tanzânia", dial: "+255" },
    { code: "CZ", flag: "🇨🇿", name: "Tchéquia", dial: "+420" },
    { code: "IO", flag: "🇮🇴", name: "Território Britânico do Oceano Índico", dial: "+246" },
    { code: "TL", flag: "🇹🇱", name: "Timor-Leste", dial: "+670" },
    { code: "TG", flag: "🇹🇬", name: "Togo", dial: "+228" },
    { code: "TK", flag: "🇹🇰", name: "Tokelau", dial: "+690" },
    { code: "TO", flag: "🇹🇴", name: "Tonga", dial: "+676" },
    { code: "TT", flag: "🇹🇹", name: "Trinidad e Tobago", dial: "+1-868" },
    { code: "TN", flag: "🇹🇳", name: "Tunísia", dial: "+216" },
    { code: "TC", flag: "🇹🇨", name: "Turcas e Caicos", dial: "+1-649" },
    { code: "TM", flag: "🇹🇲", name: "Turcomenistão", dial: "+993" },
    { code: "TR", flag: "🇹🇷", name: "Turquia", dial: "+90" },
    { code: "TV", flag: "🇹🇻", name: "Tuvalu", dial: "+688" },
    { code: "UA", flag: "🇺🇦", name: "Ucrânia", dial: "+380" },
    { code: "UG", flag: "🇺🇬", name: "Uganda", dial: "+256" },
    { code: "UY", flag: "🇺🇾", name: "Uruguai", dial: "+598" },
    { code: "UZ", flag: "🇺🇿", name: "Uzbequistão", dial: "+998" },
    { code: "VU", flag: "🇻🇺", name: "Vanuatu", dial: "+678" },
    { code: "VA", flag: "🇻🇦", name: "Vaticano", dial: "+39" },
    { code: "VE", flag: "🇻🇪", name: "Venezuela", dial: "+58" },
    { code: "VN", flag: "🇻🇳", name: "Vietnã", dial: "+84" },
    { code: "WF", flag: "🇼🇫", name: "Wallis e Futuna", dial: "+681" },
    { code: "ZM", flag: "🇿🇲", name: "Zâmbia", dial: "+260" },
    { code: "ZW", flag: "🇿🇼", name: "Zimbábue", dial: "+263" },
];

export const ConversionForm = () => {
    const [step, setStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "BR") || countries[0]);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        tempoAfiliado: "",
        faturamento: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Capture and persist UTMs to SessionStorage
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const utmKeys = [
            "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
            "raads1", "raads2", "raads3", "raads4", "raads5"
        ];

        utmKeys.forEach(key => {
            if (queryParams.has(key)) {
                sessionStorage.setItem(key, queryParams.get(key) || "");
            }
        });
    }, []);

    const handleFinalSubmit = async () => {
        setIsSubmitting(true);
        const fullPhone = `${selectedCountry.dial} ${formData.telefone}`;

        // 1. Prepare data for N8N webhook
        const webhookData = {
            name: formData.nome,
            email: formData.email,
            phone: fullPhone,
            tempo_afiliado: formData.tempoAfiliado,
            faturamento_afiliado: formData.faturamento
        };

        // 2. Dispatch to Webhook (Non-blocking with timeout)
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            await fetch('https://n8n.srv1145908.hstgr.cloud/webhook/form-elementor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(webhookData),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
        } catch (error) {
            console.error("Webhook submission error:", error);
            // Ignored so we don't break user redirect
        }

        // 3. Build Redirect URL
        const redirectUrl = new URL("https://app.ratoeiraads.com.br/freemium/cadastro");

        redirectUrl.searchParams.append("name", formData.nome);
        redirectUrl.searchParams.append("email", formData.email);
        redirectUrl.searchParams.append("phone", fullPhone);
        redirectUrl.searchParams.append("tempo_afiliado", formData.tempoAfiliado);
        redirectUrl.searchParams.append("faturamento_afiliado", formData.faturamento);

        const utmKeys = [
            "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
            "raads1", "raads2", "raads3", "raads4", "raads5"
        ];

        utmKeys.forEach(key => {
            const val = sessionStorage.getItem(key);
            if (val) {
                redirectUrl.searchParams.append(key, val);
            }
        });

        // 4. Redirect
        window.location.href = redirectUrl.toString();
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setCountryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const nextStep = () => {
        if (formData.nome && formData.email && formData.telefone) {
            setStep(prev => prev + 1);
        }
    };

    return (
        <section id="solution" className="py-24 bg-brand-dark text-white relative">
            <div className="container-wide flex flex-col md:flex-row gap-20 items-center text-center md:text-left">
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                        REASSUMA O <span className="text-brand-yellow">CONTROLE</span> HOJE.
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-xl">
                        Em menos de 5 minutos você blinda sua conta do Google Ads e começa a rastrear o que realmente importa: seu lucro.
                    </p>
                    <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                        {["Rastreamento 100% Precision", "Bloqueio Automático de Bots", "Relatórios de Lucro Real"].map((item) => (
                            <li key={item} className="flex items-center gap-3 font-bold justify-center md:justify-start">
                                <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center shrink-0">
                                    <Check size={14} className="text-white" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-[480px] bg-white rounded-modern p-10 text-brand-dark border-8 border-brand-yellow shadow-2xl relative">
                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <p className="text-xs font-black uppercase text-brand-yellow tracking-widest">Passo 01/02</p>
                                    <h3 className="text-2xl font-black">Comece seu teste grátis</h3>
                                </div>

                                <input
                                    type="text"
                                    value={formData.nome}
                                    onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                                    placeholder="Seu nome completo"
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow"
                                />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    placeholder="Seu melhor e-mail"
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow"
                                />

                                <div ref={dropdownRef} className="relative flex w-full bg-gray-50 rounded-modern border border-gray-200 focus-within:border-brand-yellow">
                                    <button
                                        type="button"
                                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                                        className="flex items-center gap-1.5 px-3 border-r border-gray-200 hover:bg-gray-100 transition-colors shrink-0"
                                    >
                                        <span className="text-lg">{selectedCountry.flag}</span>
                                        <span className="text-sm font-bold text-gray-700">{selectedCountry.dial}</span>
                                        <ChevronDown size={14} className={`text-gray-400 transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <input
                                        type="tel"
                                        value={formData.telefone}
                                        onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
                                        placeholder="Seu Telefone (XX) X XXXX-XXXX"
                                        className="flex-1 p-4 bg-transparent outline-none"
                                    />
                                    {countryDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-modern border border-gray-200 shadow-xl z-50 max-h-60 overflow-y-auto">
                                            {[...countries].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')).map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setCountryDropdownOpen(false);
                                                    }}
                                                    className={`flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-sm ${selectedCountry.code === country.code ? 'bg-brand-yellow/10 font-bold' : ''}`}
                                                >
                                                    <span className="text-lg">{country.flag}</span>
                                                    <span className="flex-1">{country.name}</span>
                                                    <span className="text-gray-400 font-medium">{country.dial}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onClick={nextStep}
                                    disabled={!formData.nome || !formData.email || !formData.telefone}
                                    className="btn-accent btn w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Continuar
                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <p className="text-xs font-black uppercase text-brand-yellow tracking-widest">Passo 02/02</p>
                                    <h3 className="text-2xl font-black">Quase lá...</h3>
                                </div>

                                <select
                                    value={formData.tempoAfiliado}
                                    onChange={(e) => setFormData(prev => ({ ...prev, tempoAfiliado: e.target.value }))}
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow font-medium"
                                    required
                                >
                                    <option value="" disabled hidden>Tempo como afiliado</option>
                                    <option value="nao_anuncio">Não anuncio</option>
                                    <option value="1_a_6_meses">De 1 a 6 meses</option>
                                    <option value="6_meses_a_1_ano">De 6 meses a 1 ano</option>
                                    <option value="1_a_2_anos">De 1 a 2 anos</option>
                                    <option value="mais_de_2_anos">Mais de 2 anos</option>
                                </select>

                                <select
                                    value={formData.faturamento}
                                    onChange={(e) => setFormData(prev => ({ ...prev, faturamento: e.target.value }))}
                                    className="w-full p-4 bg-gray-50 rounded-modern border border-gray-200 outline-none focus:border-brand-yellow font-medium"
                                    required
                                >
                                    <option value="" disabled hidden>Qual é o seu faturamento mensal?</option>
                                    <option value="ainda_nao_vendi">Ainda não vendi</option>
                                    <option value="ate_1000">Até R$1.000</option>
                                    <option value="1001_a_5000">R$1.001 - R$5.000</option>
                                    <option value="5001_a_10000">R$5.001 - R$10.000</option>
                                    <option value="10001_a_50000">R$10.001 a R$50.000</option>
                                    <option value="acima_de_50000">Acima de R$50.000</option>
                                </select>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onClick={handleFinalSubmit}
                                    disabled={!formData.tempoAfiliado || !formData.faturamento || isSubmitting}
                                    className="btn-primary btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "PROCESSANDO..." : "QUERO MEU ACESSO GRÁTIS"}
                                </motion.button>
                                <p className="text-[10px] text-center text-gray-400">
                                    Ao continuar, você concorda com nossos Termos de Uso.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
