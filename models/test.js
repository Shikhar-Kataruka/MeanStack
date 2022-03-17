var regions =
[
    {
        "name":"North","stateArray":["Chandigarh", "Delhi", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Punjab", "Rajasthan"]
    },
    {
        "name":"NorthEast","stateArray":["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland","Tripura", "Sikkim"]
    },
    {
        "name":"Central","stateArray": ["Chhattisgarh", "Madhya Pradesh", "Uttarakhand", "Uttar Pradesh"]
    },
    {
        "name":"East","stateArray" : ["Bihar", "Jharkhand", "Odisha","West Bengal"]
    },
    {
        "name":"West","stateArray": ["Dadra and Nagar Haveli","Daman and Diu","Goa","Gujarat","Maharashtra"]
    },
    {
        "name":"South","stateArray": ["Andhra Pradesh", "Karnataka", "Kerala", "Puducherry", "Tamil Nadu", "Telangana","Lakshadweep"]
    }
    ]

var states =
        [
        {  
            "state":"Andhra Pradesh",
            "city":[  
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
                "Srikakulam",
                "Visakhapatnam",
                "Vizianagaram",
                "West Godavari",
                "YSR Kadapa"
            ]
        },
        {  
            "state":"Arunachal Pradesh",
            "city":[  
                "Tawang",
                "West Kameng",
                "East Kameng",
                "Papum Pare",
                "Kurung Kumey",
                "Kra Daadi",
                "Lower Subansiri",
                "Upper Subansiri",
                "West Siang",
                "East Siang",
                "Siang",
                "Upper Siang",
                "Lower Siang",
                "Lower Dibang Valley",
                "Dibang Valley",
                "Anjaw",
                "Lohit",
                "Namsai",
                "Changlang",
                "Tirap",
                "Longding"
            ]
        },
        {  
            "state":"Assam",
            "city":[  
                "Baksa",
                "Barpeta",
                "Biswanath",
                "Bongaigaon",
                "Cachar",
                "Charaideo",
                "Chirang",
                "Darrang",
                "Dhemaji",
                "Dhubri",
                "Dibrugarh",
                "Goalpara",
                "Golaghat",
                "Hailakandi",
                "Hojai",
                "Jorhat",
                "Kamrup Metropolitan",
                "Kamrup",
                "Karbi Anglong",
                "Karimganj",
                "Kokrajhar",
                "Lakhimpur",
                "Majuli",
                "Morigaon",
                "Nagaon",
                "Nalbari",
                "Dima Hasao",
                "Sivasagar",
                "Sonitpur",
                "South Salmara-Mankachar",
                "Tinsukia",
                "Udalguri",
                "West Karbi Anglong"
            ]
        },
        {  
            "state":"Bihar",
            "city":[  
                "Araria",
                "Arwal",
                "Aurangabad",
                "Banka",
                "Begusarai",
                "Bhagalpur",
                "Bhojpur",
                "Buxar",
                "Darbhanga",
                "East Champaran (Motihari)",
                "Gaya",
                "Gopalganj",
                "Jamui",
                "Jehanabad",
                "Kaimur (Bhabua)",
                "Katihar",
                "Khagaria",
                "Kishanganj",
                "Lakhisarai",
                "Madhepura",
                "Madhubani",
                "Munger (Monghyr)",
                "Muzaffarpur",
                "Nalanda",
                "Nawada",
                "Patna",
                "Purnia (Purnea)",
                "Rohtas",
                "Saharsa",
                "Samastipur",
                "Saran",
                "Sheikhpura",
                "Sheohar",
                "Sitamarhi",
                "Siwan",
                "Supaul",
                "Vaishali",
                "West Champaran"
            ]
        },
        {  
            "state":"Chandigarh",
            "city":[  
                "Chandigarh"
            ]
        },
        {  
            "state":"Chhattisgarh",
            "city":[  
                "Balod",
                "Baloda Bazar",
                "Balrampur",
                "Bastar",
                "Bemetara",
                "Bijapur",
                "Bilaspur",
                "Dantewada (South Bastar)",
                "Dhamtari",
                "Durg",
                "Gariyaband",
                "Janjgir-Champa",
                "Jashpur",
                "Kabirdham (Kawardha)",
                "Kanker (North Bastar)",
                "Kondagaon",
                "Korba",
                "Korea (Koriya)",
                "Mahasamund",
                "Mungeli",
                "Narayanpur",
                "Raigarh",
                "Raipur",
                "Rajnandgaon",
                "Sukma",
                "Surajpur  ",
                "Surguja"
            ]
        },
        {  
            "state":"Dadra and Nagar Haveli",
            "city":[  
                "Dadra & Nagar Haveli"
            ]
        },
        {  
            "state":"Daman and Diu",
            "city":[  
                "Daman",
                "Diu"
            ]
        },
        {  
            "state":"Delhi",
            "city":[  
                "Central Delhi",
                "East Delhi",
                "New Delhi",
                "North Delhi",
                "North East  Delhi",
                "North West  Delhi",
                "Shahdara",
                "South Delhi",
                "South East Delhi",
                "South West  Delhi",
                "West Delhi"
            ]
        },
        {  
            "state":"Goa",
            "city":[  
                "North Goa",
                "South Goa"
            ]
        },
        {  
            "state":"Gujarat",
            "city":[  
                "Ahmedabad",
                "Amreli",
                "Anand",
                "Aravalli",
                "Banaskantha (Palanpur)",
                "Bharuch",
                "Bhavnagar",
                "Botad",
                "Chhota Udepur",
                "Dahod",
                "Dangs (Ahwa)",
                "Devbhoomi Dwarka",
                "Gandhinagar",
                "Gir Somnath",
                "Jamnagar",
                "Junagadh",
                "Kachchh",
                "Kheda (Nadiad)",
                "Mahisagar",
                "Mehsana",
                "Morbi",
                "Narmada (Rajpipla)",
                "Navsari",
                "Panchmahal (Godhra)",
                "Patan",
                "Porbandar",
                "Rajkot",
                "Sabarkantha (Himmatnagar)",
                "Surat",
                "Surendranagar",
                "Tapi (Vyara)",
                "Vadodara",
                "Valsad"
            ]
        },
        {  
            "state":"Haryana",
            "city":[  
                "Ambala",
                "Bhiwani",
                "Charkhi Dadri",
                "Faridabad",
                "Fatehabad",
                "Gurgaon",
                "Hisar",
                "Jhajjar",
                "Jind",
                "Kaithal",
                "Karnal",
                "Kurukshetra",
                "Mahendragarh",
                "Mewat",
                "Palwal",
                "Panchkula",
                "Panipat",
                "Rewari",
                "Rohtak",
                "Sirsa",
                "Sonipat",
                "Yamunanagar"
            ]
        },
        {  
            "state":"Himachal Pradesh",
            "city":[  
                "Bilaspur",
                "Chamba",
                "Hamirpur",
                "Kangra",
                "Kinnaur",
                "Kullu",
                "Lahaul &amp; Spiti",
                "Mandi",
                "Shimla",
                "Sirmaur (Sirmour)",
                "Solan",
                "Una"
            ]
        },
        {  
            "state":"Jammu and Kashmir",
            "city":[  
                "Anantnag",
                "Bandipore",
                "Baramulla",
                "Budgam",
                "Doda",
                "Ganderbal",
                "Jammu",
                "Kargil",
                "Kathua",
                "Kishtwar",
                "Kulgam",
                "Kupwara",
                "Leh",
                "Poonch",
                "Pulwama",
                "Rajouri",
                "Ramban",
                "Reasi",
                "Samba",
                "Shopian",
                "Srinagar",
                "Udhampur"
            ]
        },
        {  
            "state":"Jharkhand",
            "city":[  
                "Bokaro",
                "Chatra",
                "Deoghar",
                "Dhanbad",
                "Dumka",
                "East Singhbhum",
                "Garhwa",
                "Giridih",
                "Godda",
                "Gumla",
                "Hazaribag",
                "Jamtara",
                "Khunti",
                "Koderma",
                "Latehar",
                "Lohardaga",
                "Pakur",
                "Palamu",
                "Ramgarh",
                "Ranchi",
                "Sahibganj",
                "Seraikela-Kharsawan",
                "Simdega",
                "West Singhbhum"
            ]
        },
        {  
            "state":"Karnataka",
            "city":[  
                "Bagalkot",
                "Ballari (Bellary)",
                "Belagavi (Belgaum)",
                "Bengaluru (Bangalore) Rural",
                "Bengaluru (Bangalore) Urban",
                "Bidar",
                "Chamarajanagar",
                "Chikballapur",
                "Chikkamagaluru (Chikmagalur)",
                "Chitradurga",
                "Dakshina Kannada",
                "Davangere",
                "Dharwad",
                "Gadag",
                "Hassan",
                "Haveri",
                "Kalaburagi (Gulbarga)",
                "Kodagu",
                "Kolar",
                "Koppal",
                "Mandya",
                "Mysuru (Mysore)",
                "Raichur",
                "Ramanagara",
                "Shivamogga (Shimoga)",
                "Tumakuru (Tumkur)",
                "Udupi",
                "Uttara Kannada (Karwar)",
                "Vijayapura (Bijapur)",
                "Yadgir"
            ]
        },
        {  
            "state":"Kerala",
            "city":[  
                "Alappuzha",
                "Ernakulam",
                "Idukki",
                "Kannur",
                "Kasaragod",
                "Kollam",
                "Kottayam",
                "Kozhikode",
                "Malappuram",
                "Palakkad",
                "Pathanamthitta",
                "Thiruvananthapuram",
                "Thrissur",
                "Wayanad"
            ]
        },
        {  
            "state":"Lakshadweep",
            "city":[  
                "Agatti",
                "Amini",
                "Androth",
                "Bithra",
                "Chethlath",
                "Kavaratti",
                "Kadmath",
                "Kalpeni",
                "Kilthan",
                "Minicoy"
            ]
        },
        {  
            "state":"Madhya Pradesh",
            "city":[  
                "Agar Malwa",
                "Alirajpur",
                "Anuppur",
                "Ashoknagar",
                "Balaghat",
                "Barwani",
                "Betul",
                "Bhind",
                "Bhopal",
                "Burhanpur",
                "Chhatarpur",
                "Chhindwara",
                "Damoh",
                "Datia",
                "Dewas",
                "Dhar",
                "Dindori",
                "Guna",
                "Gwalior",
                "Harda",
                "Hoshangabad",
                "Indore",
                "Jabalpur",
                "Jhabua",
                "Katni",
                "Khandwa",
                "Khargone",
                "Mandla",
                "Mandsaur",
                "Morena",
                "Narsinghpur",
                "Neemuch",
                "Panna",
                "Raisen",
                "Rajgarh",
                "Ratlam",
                "Rewa",
                "Sagar",
                "Satna",
                "Sehore",
                "Seoni",
                "Shahdol",
                "Shajapur",
                "Sheopur",
                "Shivpuri",
                "Sidhi",
                "Singrauli",
                "Tikamgarh",
                "Ujjain",
                "Umaria",
                "Vidisha"
            ]
        },
        {  
            "state":"Maharashtra",
            "city":[  
                "Ahmednagar",
                "Akola",
                "Amravati",
                "Aurangabad",
                "Beed",
                "Bhandara",
                "Buldhana",
                "Chandrapur",
                "Dhule",
                "Gadchiroli",
                "Gondia",
                "Hingoli",
                "Jalgaon",
                "Jalna",
                "Kolhapur",
                "Latur",
                "Mumbai City",
                "Mumbai Suburban",
                "Nagpur",
                "Nanded",
                "Nandurbar",
                "Nashik",
                "Osmanabad",
                "Palghar",
                "Parbhani",
                "Pune",
                "Raigad",
                "Ratnagiri",
                "Sangli",
                "Satara",
                "Sindhudurg",
                "Solapur",
                "Thane",
                "Wardha",
                "Washim",
                "Yavatmal"
            ]
        },
        {  
            "state":"Manipur",
            "city":[  
                "Bishnupur",
                "Chandel",
                "Churachandpur",
                "Imphal East",
                "Imphal West",
                "Jiribam",
                "Kakching",
                "Kamjong",
                "Kangpokpi",
                "Noney",
                "Pherzawl",
                "Senapati",
                "Tamenglong",
                "Tengnoupal",
                "Thoubal",
                "Ukhrul"
            ]
        },
        {  
            "state":"Meghalaya",
            "city":[  
                "East Garo Hills",
                "East Jaintia Hills",
                "East Khasi Hills",
                "North Garo Hills",
                "Ri Bhoi",
                "South Garo Hills",
                "South West Garo Hills ",
                "South West Khasi Hills",
                "West Garo Hills",
                "West Jaintia Hills",
                "West Khasi Hills"
            ]
        },
        {  
            "state":"Mizoram",
            "city":[  
                "Aizawl",
                "Champhai",
                "Kolasib",
                "Lawngtlai",
                "Lunglei",
                "Mamit",
                "Saiha",
                "Serchhip"
            ]
        },
        {  
            "state":"Nagaland",
            "city":[  
                "Dimapur",
                "Kiphire",
                "Kohima",
                "Longleng",
                "Mokokchung",
                "Mon",
                "Peren",
                "Phek",
                "Tuensang",
                "Wokha",
                "Zunheboto"
            ]
        },
        {  
            "state":"Odisha",
            "city":[  
                "Angul",
                "Balangir",
                "Balasore",
                "Bargarh",
                "Bhadrak",
                "Boudh",
                "Cuttack",
                "Deogarh",
                "Dhenkanal",
                "Gajapati",
                "Ganjam",
                "Jagatsinghapur",
                "Jajpur",
                "Jharsuguda",
                "Kalahandi",
                "Kandhamal",
                "Kendrapara",
                "Kendujhar (Keonjhar)",
                "Khordha",
                "Koraput",
                "Malkangiri",
                "Mayurbhanj",
                "Nabarangpur",
                "Nayagarh",
                "Nuapada",
                "Puri",
                "Rayagada",
                "Sambalpur",
                "Sonepur",
                "Sundargarh"
            ]
        },
        {  
            "state":"Puducherry",
            "city":[  
                "Karaikal",
                "Mahe",
                "Pondicherry",
                "Yanam"
            ]
        },
        {  
            "state":"Punjab",
            "city":[  
                "Amritsar",
                "Barnala",
                "Bathinda",
                "Faridkot",
                "Fatehgarh Sahib",
                "Fazilka",
                "Ferozepur",
                "Gurdaspur",
                "Hoshiarpur",
                "Jalandhar",
                "Kapurthala",
                "Ludhiana",
                "Mansa",
                "Moga",
                "Muktsar",
                "Nawanshahr (Shahid Bhagat Singh Nagar)",
                "Pathankot",
                "Patiala",
                "Rupnagar",
                "Sahibzada Ajit Singh Nagar (Mohali)",
                "Sangrur",
                "Tarn Taran"
            ]
        },
        {  
            "state":"Rajasthan",
            "city":[  
                "Ajmer",
                "Alwar",
                "Banswara",
                "Baran",
                "Barmer",
                "Bharatpur",
                "Bhilwara",
                "Bikaner",
                "Bundi",
                "Chittorgarh",
                "Churu",
                "Dausa",
                "Dholpur",
                "Dungarpur",
                "Hanumangarh",
                "Jaipur",
                "Jaisalmer",
                "Jalore",
                "Jhalawar",
                "Jhunjhunu",
                "Jodhpur",
                "Karauli",
                "Kota",
                "Nagaur",
                "Pali",
                "Pratapgarh",
                "Rajsamand",
                "Sawai Madhopur",
                "Sikar",
                "Sirohi",
                "Sri Ganganagar",
                "Tonk",
                "Udaipur"
            ]
        },
        {  
            "state":"Sikkim",
            "city":[  
                "East Sikkim",
                "North Sikkim",
                "South Sikkim",
                "West Sikkim"
            ]
        },
        {  
            "state":"Tamil Nadu",
            "city":[  
                "Ariyalur",
                "Chennai",
                "Coimbatore",
                "Cuddalore",
                "Dharmapuri",
                "Dindigul",
                "Erode",
                "Kanchipuram",
                "Kanyakumari",
                "Karur",
                "Krishnagiri",
                "Madurai",
                "Nagapattinam",
                "Namakkal",
                "Nilgiris",
                "Perambalur",
                "Pudukkottai",
                "Ramanathapuram",
                "Salem",
                "Sivaganga",
                "Thanjavur",
                "Theni",
                "Thoothukudi (Tuticorin)",
                "Tiruchirappalli",
                "Tirunelveli",
                "Tiruppur",
                "Tiruvallur",
                "Tiruvannamalai",
                "Tiruvarur",
                "Vellore",
                "Viluppuram",
                "Virudhunagar"
            ]
        },
        {  
            "state":"Telangana",
            "city":[  
                "Adilabad",
                "Bhadradri Kothagudem",
                "Hyderabad",
                "Jagtial",
                "Jangaon",
                "Jayashankar Bhoopalpally",
                "Jogulamba Gadwal",
                "Kamareddy",
                "Karimnagar",
                "Khammam",
                "Komaram Bheem Asifabad",
                "Mahabubabad",
                "Mahabubnagar",
                "Mancherial",
                "Medak",
                "Medchal",
                "Nagarkurnool",
                "Nalgonda",
                "Nirmal",
                "Nizamabad",
                "Peddapalli",
                "Rajanna Sircilla",
                "Rangareddy",
                "Sangareddy",
                "Siddipet",
                "Suryapet",
                "Vikarabad",
                "Wanaparthy",
                "Warangal (Rural)",
                "Warangal (Urban)",
                "Yadadri Bhuvanagiri"
            ]
        },
        {  
            "state":"Tripura",
            "city":[  
                "Dhalai",
                "Gomati",
                "Khowai",
                "North Tripura",
                "Sepahijala",
                "South Tripura",
                "Unakoti",
                "West Tripura"
            ]
        },
        {  
            "state":"Uttarakhand",
            "city":[  
                "Almora",
                "Bageshwar",
                "Chamoli",
                "Champawat",
                "Dehradun",
                "Haridwar",
                "Nainital",
                "Pauri Garhwal",
                "Pithoragarh",
                "Rudraprayag",
                "Tehri Garhwal",
                "Udham Singh Nagar",
                "Uttarkashi"
            ]
        },
        {  
            "state":"Uttar Pradesh",
            "city":[  
                "Agra",
                "Aligarh",
                "Allahabad",
                "Ambedkar Nagar",
                "Amethi (Chatrapati Sahuji Mahraj Nagar)",
                "Amroha (J.P. Nagar)",
                "Auraiya",
                "Azamgarh",
                "Baghpat",
                "Bahraich",
                "Ballia",
                "Balrampur",
                "Banda",
                "Barabanki",
                "Bareilly",
                "Basti",
                "Bhadohi",
                "Bijnor",
                "Budaun",
                "Bulandshahr",
                "Chandauli",
                "Chitrakoot",
                "Deoria",
                "Etah",
                "Etawah",
                "Faizabad",
                "Farrukhabad",
                "Fatehpur",
                "Firozabad",
                "Gautam Buddha Nagar",
                "Ghaziabad",
                "Ghazipur",
                "Gonda",
                "Gorakhpur",
                "Hamirpur",
                "Hapur (Panchsheel Nagar)",
                "Hardoi",
                "Hathras",
                "Jalaun",
                "Jaunpur",
                "Jhansi",
                "Kannauj",
                "Kanpur Dehat",
                "Kanpur Nagar",
                "Kanshiram Nagar (Kasganj)",
                "Kaushambi",
                "Kushinagar (Padrauna)",
                "Lakhimpur - Kheri",
                "Lalitpur",
                "Lucknow",
                "Maharajganj",
                "Mahoba",
                "Mainpuri",
                "Mathura",
                "Mau",
                "Meerut",
                "Mirzapur",
                "Moradabad",
                "Muzaffarnagar",
                "Pilibhit",
                "Pratapgarh",
                "RaeBareli",
                "Rampur",
                "Saharanpur",
                "Sambhal (Bhim Nagar)",
                "Sant Kabir Nagar",
                "Shahjahanpur",
                "Shamali (Prabuddh Nagar)",
                "Shravasti",
                "Siddharth Nagar",
                "Sitapur",
                "Sonbhadra",
                "Sultanpur",
                "Unnao",
                "Varanasi"
            ]
        },
        {  
            "state":"West Bengal",
            "city":[  
                "Alipurduar",
                "Bankura",
                "Birbhum",
                "Burdwan (Bardhaman)",
                "Cooch Behar",
                "Dakshin Dinajpur (South Dinajpur)",
                "Darjeeling",
                "Hooghly",
                "Howrah",
                "Jalpaiguri",
                "Kalimpong",
                "Kolkata",
                "Malda",
                "Murshidabad",
                "Nadia",
                "North 24 Parganas",
                "Paschim Medinipur (West Medinipur)",
                "Purba Medinipur (East Medinipur)",
                "Purulia",
                "South 24 Parganas",
                "Uttar Dinajpur (North Dinajpur)"
            ]
        }
];                          
var typeOfschool=["public","international","co-operative"]
var religion = ["Hindism", "Islam", "Sikhism", "Christianity", "Jainism", "Buddhism", "Zoroastrianism"];
var language = ["Assamese", "Bengali", "English", "Gujarati", "Kannada", "Malyalam", "Marathi", "Telegu", "Tamil", "Hindi"];
var std     = ["1","2","3","4","5","6","7","8","9","10","11","12"];
var gender  = ["male","female","others"];
var teacher =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var age = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var schoolBoard = ["cbse", "icse", "state"];
var randomSchool = [7, 8, 9, 10, 11, 12];
var randomStudent = [7, 8, 9, 10, 11, 12,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1];
var counter = 9000000000;
var counter1 = 8000000000;
function sleep(milliseconds) {
    new Promise(resolve => setTimeout(resolve, milliseconds))
};
router.post("/bulkInsert", async function (req, res) {

    regions.forEach(async object => {
        let population = Math.floor((Math.random() * (150000000 - 100000000) + 100000000));
        let area = Math.floor((Math.random() * (1500000 - 100000) + 100000));
        let regionName = object.name;  //travessing region stateArray
        console.log(religion.slice(Math.floor((Math.random() * (3 - 0) + 0)), Math.floor((Math.random() * (7 - 3) + 3))));
        //console.log(Math.floor((Math.random() * (7 - 3) + 3)));

        var newRegion = new region({  //new region object
            name: object.name,
            population: population,
            landArea: area,
            density: Math.floor(population / area),
            religion:[
                { name:religion[Math.floor((Math.random() * (2 - 0) + 0))] },
                { name:religion[Math.floor((Math.random() * (4 - 2) + 2))] },
                { name: religion[Math.floor((Math.random() * (7 - 4) + 4))]}
            ],
            language:[
                { name:language[Math.floor((Math.random() * (2 - 0) + 0))] },
                { name:language[Math.floor((Math.random() * (4 - 2) + 2))] },
                { name: language[Math.floor((Math.random() * (7 - 4) + 4))] },
                { name: language[Math.floor((Math.random() * (9 - 7) + 4))]}

            ],
        });
        newRegion.save().then(savedregion => {
            object.stateArray.forEach(async stateObject => {
                var stateName = stateObject;
                let population = Math.floor((Math.random() * (15000000 - 10000000) + 10000000));
                let area = Math.floor((Math.random() * (150000 - 10000) + 10000));
                const newState = new state({
                    name: stateObject,
                    population: population,
                    landArea: area,
                    density: Math.floor(population / area),
                    religion:[
                        { name:religion[Math.floor((Math.random() * (2 - 0) + 0))] },
                        { name:religion[Math.floor((Math.random() * (4 - 2) + 2))] },
                        { name: religion[Math.floor((Math.random() * (7 - 4) + 4))]}
                    ],
                    language:[
                        { name:language[Math.floor((Math.random() * (2 - 0) + 0))] },
                        { name:language[Math.floor((Math.random() * (4 - 2) + 2))] },
                        { name: language[Math.floor((Math.random() * (7 - 4) + 4))] },
                        { name: language[Math.floor((Math.random() * (9 - 7) + 4))]}

                    ],
                    regionId: savedregion._id
                });
                newState.save().then(savedstate=>{
                    var cityArray = states.filter(element => { //city array
                        if (element.state === stateName) {
                            return element.city;
                        }
                    })                
                    cityArray[0].city.forEach(async cityObject => {
                        var cityname = cityObject;
                        let population = Math.floor((Math.random() * (150000 - 100000) + 100000));
                        let area = Math.floor((Math.random() * (15000 - 1000) + 1000));
                        const newCity = new city({
                            name: cityObject,
                            population: population,
                            landArea: area,
                            density: Math.floor(population / area),
                            religion:[
                                { name:religion[Math.floor((Math.random() * (2 - 0) + 0))] },
                                { name:religion[Math.floor((Math.random() * (4 - 2) + 2))] },
                                { name: religion[Math.floor((Math.random() * (7 - 4) + 4))]}
                            ],
                            language:[
                                { name:language[Math.floor((Math.random() * (2 - 0) + 0))] },
                                { name:language[Math.floor((Math.random() * (4 - 2) + 2))] },
                                { name: language[Math.floor((Math.random() * (7 - 4) + 4))] },
                                { name: language[Math.floor((Math.random() * (9 - 7) + 4))]}

                            ],
                            pincode: stringHash(regionName + cityname + stateName),
                            stateId: savedstate._id
                        });
                        newCity.save().then(savedcity => {
                            var schoolrandom = Math.floor((Math.random() * 5) + 1);
                            var schoolboard = schoolBoard[Math.floor((Math.random() * (3 - 0) + 0))]; //creating 5 or less schools
                            for (let i = 0; i < schoolrandom; i++) {
                                counter = counter + 1;
                                var schoolname = cityname + " " + i.toString() + " " + typeOfschool[Math.floor((Math.random() * (2 - 0) + 0))] + " " + "school";
                                var email = (schoolname+"@gmail.com").toLowerCase();
                                email = email.replace(/ /g, "");
                                var newSchool = new school({
                                    name: schoolname,
                                    contact: {
                                        email: email,
                                        phoneNo: counter
                                    },
                                    address: {
                                        region: { name: regionName, id: savedregion._id },
                                        state: { name: stateName, id: savedstate._id },
                                        city: { name: cityname, id: savedcity._id }
                                    },
                                    boards:schoolboard
                                });
                                newSchool.save().then(savedSchool=>{
                                    var studentrandom = Math.floor((Math.random() * 200) + 1);  //creating 5 or less schools
                                    bulk = studentData.collection.initializeOrderedBulkOp();
                                    for (var j = 1; j < studentrandom; j++) {
                                        counter = counter + 1;
                                        var genderRandom = Math.floor((Math.random() * gender.length));
                                        var classRandom = Math.floor((Math.random() * std.length));
                                        var fname = "Shikhar" + Math.floor(counter / 1000000).toString();
                                        var lname = "Kataruka" + Math.floor(counter / 1000000).toString();
                                        var mobNo = counter1++;
                                        var uniqueId = shortHash(fname);
                                        var newStudent = {
                                            fName: fname,
                                            lName: lname,
                                            phoneNo: mobNo,
                                            class: std[classRandom],
                                            school: schoolname,
                                            address: {
                                                region: { name: regionName, id: savedregion._id },
                                                state: { name: stateName, id: savedstate._id },
                                                city: { name: cityname, id: savedcity._id }
                                            },
                                                        
                                            subject: [
                                                { teacher: [{ name: teacher[Math.floor((Math.random() * teacher.length))], id: uniqueId }], name: "English", marks: Math.floor((Math.random() * 100) + 1) },
                                                { teacher: [{ name: teacher[Math.floor((Math.random() * teacher.length))], id: uniqueId }], name: "Maths", marks: Math.floor((Math.random() * 100) + 1) },
                                                { teacher: [{ name: teacher[Math.floor((Math.random() * teacher.length))], id: uniqueId }], name: "Science", marks: Math.floor((Math.random() * 100) + 1) },
                                                { teacher: [{ name: teacher[Math.floor((Math.random() * teacher.length))], id: uniqueId }], name: "SocialScience", marks: Math.floor((Math.random() * 100) + 1) },
                                                { teacher: [{ name: teacher[Math.floor((Math.random() * teacher.length))], id: uniqueId }], name: "Hindi", marks: Math.floor((Math.random() * 100) + 1) }
                                            ],
                                            gender: gender[genderRandom],
                                            age: age[classRandom],
                                            boards:schoolboard
                            
                                        };
                                        bulk.insert(newStudent);
                                        if (counter == 100) {
                                            bulk.execute();
                                        }
                                    }
                                    bulk.execute(); 
                                })
                                //await sleep(60000);
                            }
                        });
                        await sleep(120000); 
                    })
                });
                await sleep(120000);
            })
        });
        await sleep(120000);
    });
    res.send("ok");
    
});