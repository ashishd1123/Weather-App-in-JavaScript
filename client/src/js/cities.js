let cities = [
    {
        "name": "Adilabad",
        "state": "ANDHRA PRADESH",
        "latitude": "19.663259",
        "longitude": "78.555315"
    },
    {
        "name": "Agra",
        "state": "UTTAR PRADESH",
        "latitude": "27.17568",
        "longitude": "78.008109"
    },
    {
        "name": "Ahmadabad",
        "state": "GUJARAT",
        "latitude": "23.026157",
        "longitude": "72.589687"
    },
    {
        "name": "Ahmadnagar",
        "state": "MAHARASHTRA",
        "latitude": "19.093412",
        "longitude": "74.746855"
    },
    {
        "name": "Aizawl",
        "state": "MIZORAM",
        "latitude": "23.748659",
        "longitude": "92.728016"
    },
    {
        "name": "Ajmer",
        "state": "RAJASTHAN",
        "latitude": "26.460578",
        "longitude": "74.641756"
    },
    {
        "name": "Akola",
        "state": "MAHARASHTRA",
        "latitude": "20.710576",
        "longitude": "77.00373"
    },
    {
        "name": "Alappuzha",
        "state": "KERALA",
        "latitude": "9.501632",
        "longitude": "76.329606"
    },
    {
        "name": "Aligarh",
        "state": "UTTAR PRADESH",
        "latitude": "27.875204",
        "longitude": "78.068216"
    },
    {
        "name": "Allahabad",
        "state": "UTTAR PRADESH",
        "latitude": "25.45399",
        "longitude": "81.851869"
    },
    {
        "name": "Almora",
        "state": "UTTARANCHAL",
        "latitude": "29.603844",
        "longitude": "79.665557"
    },
    {
        "name": "Alwar",
        "state": "RAJASTHAN",
        "latitude": "27.566581",
        "longitude": "76.610602"
    },
    {
        "name": "Ambala",
        "state": "HARYANA",
        "latitude": "30.376076",
        "longitude": "76.78821"
    },
    {
        "name": "Ambedkar Nagar *",
        "state": "UTTAR PRADESH",
        "latitude": "26.413411",
        "longitude": "82.54027"
    },
    {
        "name": "Amravati",
        "state": "MAHARASHTRA",
        "latitude": "20.937346",
        "longitude": "77.760249"
    },
    {
        "name": "Amreli",
        "state": "GUJARAT",
        "latitude": "21.598002",
        "longitude": "71.216081"
    },
    {
        "name": "Amritsar",
        "state": "PUNJAB",
        "latitude": "31.623088",
        "longitude": "74.87248"
    },
    {
        "name": "Anand&nbsp; *",
        "state": "GUJARAT",
        "latitude": "22.566883",
        "longitude": "72.953775"
    },
    {
        "name": "Anantapur",
        "state": "ANDHRA PRADESH",
        "latitude": "14.679395",
        "longitude": "77.598252"
    },
    {
        "name": "Anantnag",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "33.738528",
        "longitude": "75.16328"
    },
    {
        "name": "Andamans",
        "state": "ANDAMAN &amp; NICOBAR",
        "latitude": "11.660569",
        "longitude": "92.741136"
    },
    {
        "name": "Anjaw",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.894204",
        "longitude": "96.790213"
    },
    {
        "name": "Anugul&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.836481",
        "longitude": "85.099192"
    },
    {
        "name": "Anuppur",
        "state": "MADHYA PRADESH",
        "latitude": "23.097789",
        "longitude": "81.701139"
    },
    {
        "name": "Araria",
        "state": "BIHAR",
        "latitude": "26.137794",
        "longitude": "87.464469"
    },
    {
        "name": "Ashok Nagar",
        "state": "MADHYA PRADESH",
        "latitude": "24.568718",
        "longitude": "77.728572"
    },
    {
        "name": "Auraiya *",
        "state": "UTTAR PRADESH",
        "latitude": "26.460045",
        "longitude": "79.519467"
    },
    {
        "name": "Aurangabad",
        "state": "BIHAR",
        "latitude": "24.749745",
        "longitude": "84.379225"
    },
    {
        "name": "Aurangabad",
        "state": "MAHARASHTRA",
        "latitude": "19.885543",
        "longitude": "75.333441"
    },
    {
        "name": "Azamgarh",
        "state": "UTTAR PRADESH",
        "latitude": "26.053641",
        "longitude": "83.181213"
    },
    {
        "name": "Bagalkot *",
        "state": "KARNATAKA",
        "latitude": "16.202963",
        "longitude": "75.707787"
    },
    {
        "name": "Bageshwar",
        "state": "UTTARANCHAL",
        "latitude": "29.842812",
        "longitude": "79.770905"
    },
    {
        "name": "Baghpat *",
        "state": "UTTAR PRADESH",
        "latitude": "28.934887",
        "longitude": "77.226645"
    },
    {
        "name": "Bahraich",
        "state": "UTTAR PRADESH",
        "latitude": "27.577746",
        "longitude": "81.598143"
    },
    {
        "name": "Balaghat",
        "state": "MADHYA PRADESH",
        "latitude": "21.815447",
        "longitude": "80.1932"
    },
    {
        "name": "Balangir",
        "state": "ORISSA",
        "latitude": "20.705399",
        "longitude": "83.496116"
    },
    {
        "name": "Baleshwar",
        "state": "ORISSA",
        "latitude": "21.492432",
        "longitude": "86.922744"
    },
    {
        "name": "Ballia",
        "state": "UTTAR PRADESH",
        "latitude": "25.760427",
        "longitude": "84.155791"
    },
    {
        "name": "Balrampur *",
        "state": "UTTAR PRADESH",
        "latitude": "27.424362",
        "longitude": "82.195912"
    },
    {
        "name": "Banas Kantha",
        "state": "GUJARAT",
        "latitude": "24.185024",
        "longitude": "72.444088"
    },
    {
        "name": "Banda",
        "state": "UTTAR PRADESH",
        "latitude": "25.467372",
        "longitude": "80.325071"
    },
    {
        "name": "Bangalore",
        "state": "KARNATAKA",
        "latitude": "12.97708",
        "longitude": "77.596173"
    },
    {
        "name": "Bangalore",
        "state": "KARNATAKA",
        "latitude": "12.97708",
        "longitude": "77.596173"
    },
    {
        "name": "Banka *",
        "state": "BIHAR",
        "latitude": "24.880617",
        "longitude": "86.919712"
    },
    {
        "name": "Bankura",
        "state": "WEST BENGAL",
        "latitude": "23.249965",
        "longitude": "87.061434"
    },
    {
        "name": "Banswara",
        "state": "RAJASTHAN",
        "latitude": "23.545683",
        "longitude": "74.448134"
    },
    {
        "name": "Barabanki",
        "state": "UTTAR PRADESH",
        "latitude": "26.931977",
        "longitude": "81.203728"
    },
    {
        "name": "Baramula",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "34.200628",
        "longitude": "74.328035"
    },
    {
        "name": "Baran *",
        "state": "RAJASTHAN",
        "latitude": "25.113409",
        "longitude": "76.513669"
    },
    {
        "name": "Barddhaman",
        "state": "WEST BENGAL",
        "latitude": "23.262279",
        "longitude": "87.856827"
    },
    {
        "name": "Bareilly",
        "state": "UTTAR PRADESH",
        "latitude": "28.361856",
        "longitude": "79.419697"
    },
    {
        "name": "Bargarh&nbsp; *",
        "state": "ORISSA",
        "latitude": "21.339228",
        "longitude": "83.63098"
    },
    {
        "name": "Barmer",
        "state": "RAJASTHAN",
        "latitude": "25.743971",
        "longitude": "71.393059"
    },
    {
        "name": "Barpeta",
        "state": "ASSAM",
        "latitude": "26.318438",
        "longitude": "91.012313"
    },
    {
        "name": "Barwani *",
        "state": "MADHYA PRADESH",
        "latitude": "22.02929",
        "longitude": "74.891275"
    },
    {
        "name": "Baster",
        "state": "CHHATTISGARH",
        "latitude": "19.086747",
        "longitude": "82.039276"
    },
    {
        "name": "Basti",
        "state": "UTTAR PRADESH",
        "latitude": "26.801568",
        "longitude": "82.758574"
    },
    {
        "name": "Bathinda",
        "state": "PUNJAB",
        "latitude": "30.293282",
        "longitude": "74.951926"
    },
    {
        "name": "Baudh&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.832374",
        "longitude": "83.922946"
    },
    {
        "name": "Baudh&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.826237",
        "longitude": "84.307596"
    },
    {
        "name": "Begusarai",
        "state": "BIHAR",
        "latitude": "25.409515",
        "longitude": "86.135757"
    },
    {
        "name": "Belgaum",
        "state": "KARNATAKA",
        "latitude": "15.858948",
        "longitude": "74.509438"
    },
    {
        "name": "Bellary",
        "state": "KARNATAKA",
        "latitude": "15.143301",
        "longitude": "76.923557"
    },
    {
        "name": "Betul",
        "state": "MADHYA PRADESH",
        "latitude": "21.903513",
        "longitude": "77.902064"
    },
    {
        "name": "Bhadrak&nbsp; *",
        "state": "ORISSA",
        "latitude": "21.068425",
        "longitude": "86.503508"
    },
    {
        "name": "Bhagalpur",
        "state": "BIHAR",
        "latitude": "25.239305",
        "longitude": "86.974522"
    },
    {
        "name": "Bhandara",
        "state": "MAHARASHTRA",
        "latitude": "21.169245",
        "longitude": "79.657152"
    },
    {
        "name": "Bharatpur",
        "state": "RAJASTHAN",
        "latitude": "27.213921",
        "longitude": "77.500799"
    },
    {
        "name": "Bharuch",
        "state": "GUJARAT",
        "latitude": "21.69417",
        "longitude": "72.978556"
    },
    {
        "name": "Bhavnagar",
        "state": "GUJARAT",
        "latitude": "21.77414",
        "longitude": "72.139722"
    },
    {
        "name": "Bhilwara",
        "state": "RAJASTHAN",
        "latitude": "25.347483",
        "longitude": "74.637973"
    },
    {
        "name": "Bhind",
        "state": "MADHYA PRADESH",
        "latitude": "26.564114",
        "longitude": "78.789336"
    },
    {
        "name": "Bhiwani",
        "state": "HARYANA",
        "latitude": "28.791052",
        "longitude": "76.143875"
    },
    {
        "name": "Bhojpur",
        "state": "BIHAR",
        "latitude": "25.565465",
        "longitude": "84.677244"
    },
    {
        "name": "Bhopal",
        "state": "MADHYA PRADESH",
        "latitude": "23.266323",
        "longitude": "77.414303"
    },
    {
        "name": "Bid",
        "state": "MAHARASHTRA",
        "latitude": "18.987824",
        "longitude": "75.763809"
    },
    {
        "name": "Bidar",
        "state": "KARNATAKA",
        "latitude": "17.915869",
        "longitude": "77.531757"
    },
    {
        "name": "Bijapur",
        "state": "KARNATAKA",
        "latitude": "16.823754",
        "longitude": "75.719178"
    },
    {
        "name": "Bijnor",
        "state": "UTTAR PRADESH",
        "latitude": "29.379583",
        "longitude": "78.13407"
    },
    {
        "name": "Bikaner",
        "state": "RAJASTHAN",
        "latitude": "28.016543",
        "longitude": "73.317199"
    },
    {
        "name": "Bilaspur",
        "state": "HIMACHAL PRADESH",
        "latitude": "31.323902",
        "longitude": "76.761527"
    },
    {
        "name": "Bilaspur",
        "state": "CHHATTISGARH",
        "latitude": "22.074605",
        "longitude": "82.176189"
    },
    {
        "name": "Birbhum",
        "state": "WEST BENGAL",
        "latitude": "23.908735",
        "longitude": "87.534251"
    },
    {
        "name": "Bishnupur",
        "state": "MANIPUR",
        "latitude": "24.632371",
        "longitude": "93.764667"
    },
    {
        "name": "Bokaro *",
        "state": "JHARKHAND",
        "latitude": "23.640657",
        "longitude": "86.162947"
    },
    {
        "name": "Bongaigaon",
        "state": "ASSAM",
        "latitude": "26.502443",
        "longitude": "90.564968"
    },
    {
        "name": "Budaun",
        "state": "UTTAR PRADESH",
        "latitude": "28.034404",
        "longitude": "79.124138"
    },
    {
        "name": "Bulandshahr",
        "state": "UTTAR PRADESH",
        "latitude": "28.400237",
        "longitude": "77.861025"
    },
    {
        "name": "Buldana",
        "state": "MAHARASHTRA",
        "latitude": "20.532223",
        "longitude": "76.181689"
    },
    {
        "name": "Bundi",
        "state": "RAJASTHAN",
        "latitude": "25.442985",
        "longitude": "75.643423"
    },
    {
        "name": "Burhanpur",
        "state": "MADHYA PRADESH",
        "latitude": "21.33186",
        "longitude": "76.20459"
    },
    {
        "name": "Buxar *",
        "state": "BIHAR",
        "latitude": "25.571102",
        "longitude": "83.98059"
    },
    {
        "name": "Cachar",
        "state": "ASSAM",
        "latitude": "24.820025",
        "longitude": "92.795038"
    },
    {
        "name": "Chamba",
        "state": "HIMACHAL PRADESH",
        "latitude": "32.558843",
        "longitude": "76.126097"
    },
    {
        "name": "Chamoli",
        "state": "UTTARANCHAL",
        "latitude": "30.401381",
        "longitude": "79.331112"
    },
    {
        "name": "Champawat",
        "state": "UTTARANCHAL",
        "latitude": "29.333337",
        "longitude": "80.103959"
    },
    {
        "name": "Champhai *",
        "state": "MIZORAM",
        "latitude": "23.489023",
        "longitude": "93.345186"
    },
    {
        "name": "Chamrajnagar*",
        "state": "KARNATAKA",
        "latitude": "11.936475",
        "longitude": "76.939171"
    },
    {
        "name": "Chandauli *",
        "state": "UTTAR PRADESH",
        "latitude": "25.258531",
        "longitude": "83.270958"
    },
    {
        "name": "Chandel",
        "state": "MANIPUR",
        "latitude": "24.320947",
        "longitude": "93.989857"
    },
    {
        "name": "Chandigarh",
        "state": "CHANDIGARH",
        "latitude": "30.731928",
        "longitude": "76.785486"
    },
    {
        "name": "Chandrapur",
        "state": "MAHARASHTRA",
        "latitude": "19.951685",
        "longitude": "79.295823"
    },
    {
        "name": "Changlang",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.087745",
        "longitude": "95.731123"
    },
    {
        "name": "Chatra *",
        "state": "JHARKHAND",
        "latitude": "24.208676",
        "longitude": "84.866295"
    },
    {
        "name": "Chennai",
        "state": "TAMIL NADU",
        "latitude": "13.074737",
        "longitude": "80.267689"
    },
    {
        "name": "Chhatarpur",
        "state": "MADHYA PRADESH",
        "latitude": "24.915425",
        "longitude": "79.592243"
    },
    {
        "name": "Chhindwara",
        "state": "MADHYA PRADESH",
        "latitude": "22.057572",
        "longitude": "78.940098"
    },
    {
        "name": "Chikmagalur",
        "state": "KARNATAKA",
        "latitude": "13.318348",
        "longitude": "75.772746"
    },
    {
        "name": "Chitradurga",
        "state": "KARNATAKA",
        "latitude": "14.227245",
        "longitude": "76.402839"
    },
    {
        "name": "Chitrakoot *",
        "state": "UTTAR PRADESH",
        "latitude": "25.210734",
        "longitude": "80.914156"
    },
    {
        "name": "Chittaurgarh",
        "state": "RAJASTHAN",
        "latitude": "24.876434",
        "longitude": "74.619443"
    },
    {
        "name": "Chittoor",
        "state": "ANDHRA PRADESH",
        "latitude": "13.215319",
        "longitude": "79.100032"
    },
    {
        "name": "Churachandpur",
        "state": "MANIPUR",
        "latitude": "24.334438",
        "longitude": "93.658102"
    },
    {
        "name": "Churu",
        "state": "RAJASTHAN",
        "latitude": "28.300078",
        "longitude": "74.966601"
    },
    {
        "name": "Coimbatore",
        "state": "TAMIL NADU",
        "latitude": "10.994743",
        "longitude": "76.96688"
    },
    {
        "name": "Cuddalore",
        "state": "TAMIL NADU",
        "latitude": "11.75553",
        "longitude": "79.762325"
    },
    {
        "name": "Cuddapah",
        "state": "ANDHRA PRADESH",
        "latitude": "14.482391",
        "longitude": "78.82537"
    },
    {
        "name": "Cuttack",
        "state": "ORISSA",
        "latitude": "20.478116",
        "longitude": "85.85389"
    },
    {
        "name": "Dadra &amp; Nagar Haveli",
        "state": "DADRA &amp; NAGAR HAVE",
        "latitude": "20.284446",
        "longitude": "72.998942"
    },
    {
        "name": "Dakshin Dinajpur *",
        "state": "WEST BENGAL",
        "latitude": "25.230003",
        "longitude": "88.789755"
    },
    {
        "name": "Dakshina Kannada",
        "state": "KARNATAKA",
        "latitude": "12.863889",
        "longitude": "74.841219"
    },
    {
        "name": "Daman",
        "state": "DAMAN &amp; DIU",
        "latitude": "20.424388",
        "longitude": "72.846682"
    },
    {
        "name": "Damoh",
        "state": "MADHYA PRADESH",
        "latitude": "23.824248",
        "longitude": "79.455215"
    },
    {
        "name": "Dantewada*",
        "state": "CHHATTISGARH",
        "latitude": "18.87715",
        "longitude": "81.367201"
    },
    {
        "name": "Darbhanga",
        "state": "BIHAR",
        "latitude": "26.164221",
        "longitude": "85.910612"
    },
    {
        "name": "Darjiling",
        "state": "WEST BENGAL",
        "latitude": "27.041527",
        "longitude": "88.272768"
    },
    {
        "name": "Darrang",
        "state": "ASSAM",
        "latitude": "26.441811",
        "longitude": "92.033565"
    },
    {
        "name": "Datia",
        "state": "MADHYA PRADESH",
        "latitude": "25.673026",
        "longitude": "78.458158"
    },
    {
        "name": "Dausa *",
        "state": "RAJASTHAN",
        "latitude": "26.899411",
        "longitude": "76.334441"
    },
    {
        "name": "Davangere*",
        "state": "KARNATAKA",
        "latitude": "14.492934",
        "longitude": "75.936375"
    },
    {
        "name": "Debagarh&nbsp; *",
        "state": "ORISSA",
        "latitude": "21.546245",
        "longitude": "84.744026"
    },
    {
        "name": "Dehradun",
        "state": "UTTARANCHAL",
        "latitude": "30.325264",
        "longitude": "78.041576"
    },
    {
        "name": "Deoghar",
        "state": "JHARKHAND",
        "latitude": "24.481265",
        "longitude": "86.700615"
    },
    {
        "name": "Deoria",
        "state": "UTTAR PRADESH",
        "latitude": "26.500556",
        "longitude": "83.783389"
    },
    {
        "name": "Dewas",
        "state": "MADHYA PRADESH",
        "latitude": "22.962736",
        "longitude": "76.071156"
    },
    {
        "name": "Dhalai&nbsp; *",
        "state": "TRIPURA",
        "latitude": "23.938769",
        "longitude": "91.868389"
    },
    {
        "name": "Dhamtari *",
        "state": "CHHATTISGARH",
        "latitude": "20.703812",
        "longitude": "81.567596"
    },
    {
        "name": "Dhanbad",
        "state": "JHARKHAND",
        "latitude": "23.797727",
        "longitude": "86.436225"
    },
    {
        "name": "Dhar",
        "state": "MADHYA PRADESH",
        "latitude": "22.598554",
        "longitude": "75.314536"
    },
    {
        "name": "Dharmapuri",
        "state": "TAMIL NADU",
        "latitude": "12.134803",
        "longitude": "78.161203"
    },
    {
        "name": "Dharwad",
        "state": "KARNATAKA",
        "latitude": "15.452454",
        "longitude": "75.012073"
    },
    {
        "name": "Dhaulpur",
        "state": "RAJASTHAN",
        "latitude": "26.693948",
        "longitude": "77.894554"
    },
    {
        "name": "Dhemaji",
        "state": "ASSAM",
        "latitude": "27.4844",
        "longitude": "94.594933"
    },
    {
        "name": "Dhenkanal",
        "state": "ORISSA",
        "latitude": "20.654734",
        "longitude": "85.588016"
    },
    {
        "name": "Dhubri",
        "state": "ASSAM",
        "latitude": "26.019042",
        "longitude": "89.991086"
    },
    {
        "name": "Dhule",
        "state": "MAHARASHTRA",
        "latitude": "20.90441",
        "longitude": "74.781243"
    },
    {
        "name": "Dibang Valley",
        "state": "ARUNACHAL PRADESH",
        "latitude": "28.850861",
        "longitude": "95.871559"
    },
    {
        "name": "Dibrugarh",
        "state": "ASSAM",
        "latitude": "27.480193",
        "longitude": "94.912419"
    },
    {
        "name": "Dimapur *",
        "state": "NAGALAND",
        "latitude": "25.91789",
        "longitude": "93.746839"
    },
    {
        "name": "Dindigul",
        "state": "TAMIL NADU",
        "latitude": "10.361936",
        "longitude": "77.968908"
    },
    {
        "name": "Dindori *",
        "state": "MADHYA PRADESH",
        "latitude": "22.939702",
        "longitude": "81.083584"
    },
    {
        "name": "Diu",
        "state": "DAMAN &amp; DIU",
        "latitude": "20.713309",
        "longitude": "70.979548"
    },
    {
        "name": "Dohad&nbsp; *",
        "state": "GUJARAT",
        "latitude": "22.823003",
        "longitude": "74.263925"
    },
    {
        "name": "Dumka",
        "state": "JHARKHAND",
        "latitude": "24.271014",
        "longitude": "87.249367"
    },
    {
        "name": "Dungarpur",
        "state": "RAJASTHAN",
        "latitude": "23.837104",
        "longitude": "73.716702"
    },
    {
        "name": "Durg",
        "state": "CHHATTISGARH",
        "latitude": "21.188278",
        "longitude": "81.275855"
    },
    {
        "name": "East",
        "state": "SIKKIM",
        "latitude": "27.328923",
        "longitude": "88.616469"
    },
    {
        "name": "East Garo Hills",
        "state": "MEGHALAYA",
        "latitude": "25.528369",
        "longitude": "90.593784"
    },
    {
        "name": "East Godavari",
        "state": "ANDHRA PRADESH",
        "latitude": "16.969397",
        "longitude": "82.236435"
    },
    {
        "name": "East Kameng",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.333113",
        "longitude": "93.063248"
    },
    {
        "name": "East Khasi Hills",
        "state": "MEGHALAYA",
        "latitude": "25.588025",
        "longitude": "91.887356"
    },
    {
        "name": "East Nimar",
        "state": "MADHYA PRADESH",
        "latitude": "21.827574",
        "longitude": "76.356018"
    },
    {
        "name": "East Siang",
        "state": "ARUNACHAL PRADESH",
        "latitude": "28.065355",
        "longitude": "95.333325"
    },
    {
        "name": "Ernakulam",
        "state": "KERALA",
        "latitude": "9.956764",
        "longitude": "76.292401"
    },
    {
        "name": "Erode",
        "state": "TAMIL NADU",
        "latitude": "11.334348",
        "longitude": "77.72772"
    },
    {
        "name": "Etah",
        "state": "UTTAR PRADESH",
        "latitude": "27.55673",
        "longitude": "78.657582"
    },
    {
        "name": "Etawah",
        "state": "UTTAR PRADESH",
        "latitude": "26.77697",
        "longitude": "79.025561"
    },
    {
        "name": "Faizabad",
        "state": "UTTAR PRADESH",
        "latitude": "26.781125",
        "longitude": "82.149876"
    },
    {
        "name": "Faridabad",
        "state": "HARYANA",
        "latitude": "28.427902",
        "longitude": "77.329409"
    },
    {
        "name": "Faridkot",
        "state": "PUNJAB",
        "latitude": "30.67333",
        "longitude": "74.758547"
    },
    {
        "name": "Farrukhabad",
        "state": "UTTAR PRADESH",
        "latitude": "27.367541",
        "longitude": "79.635106"
    },
    {
        "name": "Fatehabad *",
        "state": "HARYANA",
        "latitude": "29.516385",
        "longitude": "75.4548"
    },
    {
        "name": "Fatehgarh Sahib *",
        "state": "PUNJAB",
        "latitude": "30.647528",
        "longitude": "76.406922"
    },
    {
        "name": "Fatehpur",
        "state": "UTTAR PRADESH",
        "latitude": "25.927961",
        "longitude": "80.817369"
    },
    {
        "name": "Firozabad",
        "state": "UTTAR PRADESH",
        "latitude": "27.142217",
        "longitude": "78.398303"
    },
    {
        "name": "Firozpur",
        "state": "PUNJAB",
        "latitude": "30.939516",
        "longitude": "74.619239"
    },
    {
        "name": "Gadag *",
        "state": "KARNATAKA",
        "latitude": "15.441432",
        "longitude": "75.646857"
    },
    {
        "name": "Gadchiroli",
        "state": "MAHARASHTRA",
        "latitude": "20.184794",
        "longitude": "80.007887"
    },
    {
        "name": "Gajapati&nbsp; *",
        "state": "ORISSA",
        "latitude": "18.776646",
        "longitude": "84.080324"
    },
    {
        "name": "Gandhinagar",
        "state": "GUJARAT",
        "latitude": "23.235737",
        "longitude": "72.671374"
    },
    {
        "name": "Ganganagar",
        "state": "RAJASTHAN",
        "latitude": "29.928315",
        "longitude": "73.867201"
    },
    {
        "name": "Ganjam",
        "state": "ORISSA",
        "latitude": "19.350441",
        "longitude": "84.985993"
    },
    {
        "name": "Garhwa *",
        "state": "JHARKHAND",
        "latitude": "24.17351",
        "longitude": "83.81231"
    },
    {
        "name": "Garhwal",
        "state": "UTTARANCHAL",
        "latitude": "30.152136",
        "longitude": "78.780959"
    },
    {
        "name": "Gautam Buddha Nagar *",
        "state": "UTTAR PRADESH",
        "latitude": "28.567013",
        "longitude": "77.327519"
    },
    {
        "name": "Gaya",
        "state": "BIHAR",
        "latitude": "24.79151",
        "longitude": "85.004475"
    },
    {
        "name": "Ghaziabad",
        "state": "UTTAR PRADESH",
        "latitude": "28.660255",
        "longitude": "77.445653"
    },
    {
        "name": "Ghazipur",
        "state": "UTTAR PRADESH",
        "latitude": "25.586118",
        "longitude": "83.581496"
    },
    {
        "name": "Giridih",
        "state": "JHARKHAND",
        "latitude": "24.189967",
        "longitude": "86.313267"
    },
    {
        "name": "Goalpara",
        "state": "ASSAM",
        "latitude": "26.176465",
        "longitude": "90.631164"
    },
    {
        "name": "Godda",
        "state": "JHARKHAND",
        "latitude": "24.829078",
        "longitude": "87.215924"
    },
    {
        "name": "Golaghat",
        "state": "ASSAM",
        "latitude": "26.509522",
        "longitude": "93.974001"
    },
    {
        "name": "Gonda",
        "state": "UTTAR PRADESH",
        "latitude": "27.133796",
        "longitude": "81.962471"
    },
    {
        "name": "Gondiya *",
        "state": "MAHARASHTRA",
        "latitude": "21.448734",
        "longitude": "80.1972"
    },
    {
        "name": "Gopalganj",
        "state": "BIHAR",
        "latitude": "26.465323",
        "longitude": "84.444294"
    },
    {
        "name": "Gorakhpur",
        "state": "UTTAR PRADESH",
        "latitude": "26.759828",
        "longitude": "83.370935"
    },
    {
        "name": "Gulbarga",
        "state": "KARNATAKA",
        "latitude": "17.334962",
        "longitude": "76.834784"
    },
    {
        "name": "Gumla",
        "state": "JHARKHAND",
        "latitude": "23.026635",
        "longitude": "84.534374"
    },
    {
        "name": "Guna",
        "state": "MADHYA PRADESH",
        "latitude": "24.644351",
        "longitude": "77.313136"
    },
    {
        "name": "Guntur",
        "state": "ANDHRA PRADESH",
        "latitude": "16.297356",
        "longitude": "80.447394"
    },
    {
        "name": "Gurdaspur",
        "state": "PUNJAB",
        "latitude": "32.045131",
        "longitude": "75.408744"
    },
    {
        "name": "Gurgaon",
        "state": "HARYANA",
        "latitude": "28.466248",
        "longitude": "77.028569"
    },
    {
        "name": "Gwalior",
        "state": "MADHYA PRADESH",
        "latitude": "26.222524",
        "longitude": "78.168463"
    },
    {
        "name": "Hailakandi",
        "state": "ASSAM",
        "latitude": "24.709416",
        "longitude": "92.568191"
    },
    {
        "name": "Hamirpur",
        "state": "HIMACHAL PRADESH",
        "latitude": "31.672705",
        "longitude": "76.521404"
    },
    {
        "name": "Hamirpur",
        "state": "UTTAR PRADESH",
        "latitude": "25.959941",
        "longitude": "80.117055"
    },
    {
        "name": "Hanumangarh *",
        "state": "RAJASTHAN",
        "latitude": "29.577336",
        "longitude": "74.320427"
    },
    {
        "name": "Haora",
        "state": "WEST BENGAL",
        "latitude": "22.567906",
        "longitude": "88.327811"
    },
    {
        "name": "Harda *",
        "state": "MADHYA PRADESH",
        "latitude": "22.336719",
        "longitude": "77.085484"
    },
    {
        "name": "Hardoi",
        "state": "UTTAR PRADESH",
        "latitude": "27.395551",
        "longitude": "80.127149"
    },
    {
        "name": "Hardwar",
        "state": "UTTARANCHAL",
        "latitude": "29.919595",
        "longitude": "78.162848"
    },
    {
        "name": "Hassan",
        "state": "KARNATAKA",
        "latitude": "13.008913",
        "longitude": "76.098149"
    },
    {
        "name": "Hathras *",
        "state": "UTTAR PRADESH",
        "latitude": "27.585241",
        "longitude": "78.05918"
    },
    {
        "name": "Haveri *",
        "state": "KARNATAKA",
        "latitude": "14.810215",
        "longitude": "75.407562"
    },
    {
        "name": "Hazaribag",
        "state": "JHARKHAND",
        "latitude": "23.988567",
        "longitude": "85.36671"
    },
    {
        "name": "Hingoli *",
        "state": "MAHARASHTRA",
        "latitude": "19.713154",
        "longitude": "77.153409"
    },
    {
        "name": "Hisar",
        "state": "HARYANA",
        "latitude": "29.151765",
        "longitude": "75.725027"
    },
    {
        "name": "Hoshangabad",
        "state": "MADHYA PRADESH",
        "latitude": "22.740101",
        "longitude": "77.713729"
    },
    {
        "name": "Hoshiarpur",
        "state": "PUNJAB",
        "latitude": "31.535053",
        "longitude": "75.914418"
    },
    {
        "name": "Hugli",
        "state": "WEST BENGAL",
        "latitude": "22.900631",
        "longitude": "88.396631"
    },
    {
        "name": "Hyderabad",
        "state": "ANDHRA PRADESH",
        "latitude": "17.399667",
        "longitude": "78.488244"
    },
    {
        "name": "Hyderabad",
        "state": "ANDHRA PRADESH",
        "latitude": "17.399667",
        "longitude": "78.488244"
    },
    {
        "name": "Idukki",
        "state": "KERALA",
        "latitude": "9.900515",
        "longitude": "77.176271"
    },
    {
        "name": "Imphal East *",
        "state": "MANIPUR",
        "latitude": "24.811571",
        "longitude": "93.950799"
    },
    {
        "name": "Indore",
        "state": "MADHYA PRADESH",
        "latitude": "22.716881",
        "longitude": "75.867271"
    },
    {
        "name": "Jabalpur",
        "state": "MADHYA PRADESH",
        "latitude": "23.172246",
        "longitude": "79.937619"
    },
    {
        "name": "Jagatsinghapur&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.26385",
        "longitude": "86.166024"
    },
    {
        "name": "Jaintia Hills",
        "state": "MEGHALAYA",
        "latitude": "25.438113",
        "longitude": "92.198261"
    },
    {
        "name": "Jaipur",
        "state": "RAJASTHAN",
        "latitude": "26.914736",
        "longitude": "75.810664"
    },
    {
        "name": "Jaisalmer",
        "state": "RAJASTHAN",
        "latitude": "26.911481",
        "longitude": "70.91459"
    },
    {
        "name": "Jajapur&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.844687",
        "longitude": "86.32523"
    },
    {
        "name": "Jalandhar",
        "state": "PUNJAB",
        "latitude": "31.339673",
        "longitude": "75.581698"
    },
    {
        "name": "Jalaun",
        "state": "UTTAR PRADESH",
        "latitude": "25.989945",
        "longitude": "79.454191"
    },
    {
        "name": "Jalgaon",
        "state": "MAHARASHTRA",
        "latitude": "21.009559",
        "longitude": "75.570044"
    },
    {
        "name": "Jalna",
        "state": "MAHARASHTRA",
        "latitude": "19.848844",
        "longitude": "75.901627"
    },
    {
        "name": "Jalor",
        "state": "RAJASTHAN",
        "latitude": "25.342919",
        "longitude": "72.620614"
    },
    {
        "name": "Jalpaiguri",
        "state": "WEST BENGAL",
        "latitude": "26.527845",
        "longitude": "88.719039"
    },
    {
        "name": "Jammu",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "32.727401",
        "longitude": "74.8456"
    },
    {
        "name": "Jamnagar",
        "state": "GUJARAT",
        "latitude": "22.471076",
        "longitude": "70.07265"
    },
    {
        "name": "Jamtara",
        "state": "JHARKHAND",
        "latitude": "23.959798",
        "longitude": "86.788385"
    },
    {
        "name": "Jamui *",
        "state": "BIHAR",
        "latitude": "24.925934",
        "longitude": "86.216344"
    },
    {
        "name": "Janjgir – Champa*",
        "state": "CHHATTISGARH",
        "latitude": "22.003783",
        "longitude": "82.594618"
    },
    {
        "name": "Jashpur *",
        "state": "CHHATTISGARH",
        "latitude": "22.892329",
        "longitude": "84.158393"
    },
    {
        "name": "Jaunpur",
        "state": "UTTAR PRADESH",
        "latitude": "25.748744",
        "longitude": "82.687741"
    },
    {
        "name": "Jehanabad",
        "state": "BIHAR",
        "latitude": "25.212198",
        "longitude": "84.982009"
    },
    {
        "name": "Jhabua",
        "state": "MADHYA PRADESH",
        "latitude": "22.769906",
        "longitude": "74.599553"
    },
    {
        "name": "Jhajjar *",
        "state": "HARYANA",
        "latitude": "28.601349",
        "longitude": "76.6536"
    },
    {
        "name": "Jhalawar",
        "state": "RAJASTHAN",
        "latitude": "24.592312",
        "longitude": "76.165807"
    },
    {
        "name": "Jhansi",
        "state": "UTTAR PRADESH",
        "latitude": "25.462975",
        "longitude": "78.57546"
    },
    {
        "name": "Jharsuguda&nbsp; *",
        "state": "ORISSA",
        "latitude": "21.851989",
        "longitude": "84.025951"
    },
    {
        "name": "Jhunjhunun",
        "state": "RAJASTHAN",
        "latitude": "28.129504",
        "longitude": "75.400108"
    },
    {
        "name": "Jind",
        "state": "HARYANA",
        "latitude": "29.318821",
        "longitude": "76.313347"
    },
    {
        "name": "Jodhpur",
        "state": "RAJASTHAN",
        "latitude": "26.279624",
        "longitude": "73.022778"
    },
    {
        "name": "Jorhat",
        "state": "ASSAM",
        "latitude": "26.754666",
        "longitude": "94.218519"
    },
    {
        "name": "Junagadh",
        "state": "GUJARAT",
        "latitude": "21.522705",
        "longitude": "70.461296"
    },
    {
        "name": "Jyotiba Phule Nagar *",
        "state": "UTTAR PRADESH",
        "latitude": "28.906416",
        "longitude": "78.462509"
    },
    {
        "name": "Kachchh",
        "state": "GUJARAT",
        "latitude": "23.251213",
        "longitude": "69.666108"
    },
    {
        "name": "Kaimur (Bhabua) *",
        "state": "BIHAR",
        "latitude": "25.040295",
        "longitude": "83.602718"
    },
    {
        "name": "Kaithal",
        "state": "HARYANA",
        "latitude": "29.804185",
        "longitude": "76.399321"
    },
    {
        "name": "Kalahandi",
        "state": "ORISSA",
        "latitude": "19.910373",
        "longitude": "83.176494"
    },
    {
        "name": "Kamrup",
        "state": "ASSAM",
        "latitude": "26.181061",
        "longitude": "91.751916"
    },
    {
        "name": "Kancheepuram",
        "state": "TAMIL NADU",
        "latitude": "12.834822",
        "longitude": "79.715697"
    },
    {
        "name": "Kandhamal",
        "state": "ORISSA",
        "latitude": "20.467657",
        "longitude": "84.240574"
    },
    {
        "name": "Kangra",
        "state": "HIMACHAL PRADESH",
        "latitude": "32.217751",
        "longitude": "76.31406"
    },
    {
        "name": "Kanker *",
        "state": "CHHATTISGARH",
        "latitude": "20.275167",
        "longitude": "81.50583"
    },
    {
        "name": "Kannauj *",
        "state": "UTTAR PRADESH",
        "latitude": "27.056124",
        "longitude": "79.926694"
    },
    {
        "name": "Kanniyakumari",
        "state": "TAMIL NADU",
        "latitude": "8.175865",
        "longitude": "77.440953"
    },
    {
        "name": "Kannur",
        "state": "KERALA",
        "latitude": "11.868687",
        "longitude": "75.36639"
    },
    {
        "name": "Kanpur Dehat",
        "state": "UTTAR PRADESH",
        "latitude": "26.375967",
        "longitude": "79.955267"
    },
    {
        "name": "Kanpur Nagar",
        "state": "UTTAR PRADESH",
        "latitude": "26.461855",
        "longitude": "80.344194"
    },
    {
        "name": "Kapurthala",
        "state": "PUNJAB",
        "latitude": "31.379585",
        "longitude": "75.385678"
    },
    {
        "name": "Karaikal",
        "state": "PONDICHERRY",
        "latitude": "10.917964",
        "longitude": "79.837646"
    },
    {
        "name": "Karauli *",
        "state": "RAJASTHAN",
        "latitude": "26.4987",
        "longitude": "77.022184"
    },
    {
        "name": "Karbi Anglong",
        "state": "ASSAM",
        "latitude": "25.838215",
        "longitude": "93.446934"
    },
    {
        "name": "Karimganj",
        "state": "ASSAM",
        "latitude": "24.871588",
        "longitude": "92.353828"
    },
    {
        "name": "Karimnagar",
        "state": "ANDHRA PRADESH",
        "latitude": "18.431912",
        "longitude": "79.144791"
    },
    {
        "name": "Karnal",
        "state": "HARYANA",
        "latitude": "29.692495",
        "longitude": "76.985142"
    },
    {
        "name": "Karur&nbsp; *",
        "state": "TAMIL NADU",
        "latitude": "10.948948",
        "longitude": "78.086832"
    },
    {
        "name": "Kasaragod",
        "state": "KERALA",
        "latitude": "12.498305",
        "longitude": "74.990213"
    },
    {
        "name": "Kathua",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "32.359369",
        "longitude": "75.516357"
    },
    {
        "name": "Katihar",
        "state": "BIHAR",
        "latitude": "25.537374",
        "longitude": "87.583497"
    },
    {
        "name": "Katni *",
        "state": "MADHYA PRADESH",
        "latitude": "23.841092",
        "longitude": "80.397878"
    },
    {
        "name": "Kaushambi *",
        "state": "UTTAR PRADESH",
        "latitude": "25.524545",
        "longitude": "81.383437"
    },
    {
        "name": "Kawardha *",
        "state": "CHHATTISGARH",
        "latitude": "22.006266",
        "longitude": "81.259515"
    },
    {
        "name": "Kendrapara *",
        "state": "ORISSA",
        "latitude": "20.508399",
        "longitude": "86.417262"
    },
    {
        "name": "Kendujhar",
        "state": "ORISSA",
        "latitude": "21.644926",
        "longitude": "85.583459"
    },
    {
        "name": "Khagaria",
        "state": "BIHAR",
        "latitude": "25.508751",
        "longitude": "86.472735"
    },
    {
        "name": "Khammam",
        "state": "ANDHRA PRADESH",
        "latitude": "17.245344",
        "longitude": "80.140567"
    },
    {
        "name": "Kheda",
        "state": "GUJARAT",
        "latitude": "22.747316",
        "longitude": "72.695273"
    },
    {
        "name": "Kheri",
        "state": "UTTAR PRADESH",
        "latitude": "27.947796",
        "longitude": "80.788432"
    },
    {
        "name": "Khordha&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.187781",
        "longitude": "85.622131"
    },
    {
        "name": "Kinnaur",
        "state": "HIMACHAL PRADESH",
        "latitude": "31.546954",
        "longitude": "78.26285"
    },
    {
        "name": "Kishanganj",
        "state": "BIHAR",
        "latitude": "26.112966",
        "longitude": "87.9283"
    },
    {
        "name": "Koch Bihar",
        "state": "WEST BENGAL",
        "latitude": "26.328292",
        "longitude": "89.453617"
    },
    {
        "name": "Kodagu",
        "state": "KARNATAKA",
        "latitude": "12.422433",
        "longitude": "75.744027"
    },
    {
        "name": "Kodarma *",
        "state": "JHARKHAND",
        "latitude": "24.463",
        "longitude": "85.587047"
    },
    {
        "name": "Kohima",
        "state": "NAGALAND",
        "latitude": "25.684924",
        "longitude": "94.118903"
    },
    {
        "name": "Kokrajhar",
        "state": "ASSAM",
        "latitude": "26.40281",
        "longitude": "90.273819"
    },
    {
        "name": "Kolar",
        "state": "KARNATAKA",
        "latitude": "13.135759",
        "longitude": "78.136263"
    },
    {
        "name": "Kolasib *",
        "state": "MIZORAM",
        "latitude": "24.252182",
        "longitude": "92.690303"
    },
    {
        "name": "Kolhapur",
        "state": "MAHARASHTRA",
        "latitude": "16.694394",
        "longitude": "74.22406"
    },
    {
        "name": "Kolkata",
        "state": "WEST BENGAL",
        "latitude": "22.548783",
        "longitude": "88.39894"
    },
    {
        "name": "Kollam",
        "state": "KERALA",
        "latitude": "8.888392",
        "longitude": "76.609021"
    },
    {
        "name": "Koppal *",
        "state": "KARNATAKA",
        "latitude": "15.362997",
        "longitude": "76.167916"
    },
    {
        "name": "Koraput",
        "state": "ORISSA",
        "latitude": "18.80694",
        "longitude": "82.719909"
    },
    {
        "name": "Korba *",
        "state": "CHHATTISGARH",
        "latitude": "22.337193",
        "longitude": "82.715651"
    },
    {
        "name": "Koriya *",
        "state": "CHHATTISGARH",
        "latitude": "23.244843",
        "longitude": "82.570516"
    },
    {
        "name": "Kota",
        "state": "RAJASTHAN",
        "latitude": "25.179993",
        "longitude": "75.846204"
    },
    {
        "name": "Kottayam",
        "state": "KERALA",
        "latitude": "9.595602",
        "longitude": "76.521426"
    },
    {
        "name": "Kozhikode",
        "state": "KERALA",
        "latitude": "11.239895",
        "longitude": "75.795215"
    },
    {
        "name": "Krishna",
        "state": "ANDHRA PRADESH",
        "latitude": "16.189204",
        "longitude": "81.136184"
    },
    {
        "name": "Krishnagiri",
        "state": "TAMIL NADU",
        "latitude": "12.533802",
        "longitude": "78.228528"
    },
    {
        "name": "Kullu",
        "state": "HIMACHAL PRADESH",
        "latitude": "31.960573",
        "longitude": "77.107897"
    },
    {
        "name": "Kurnool",
        "state": "ANDHRA PRADESH",
        "latitude": "15.834985",
        "longitude": "78.041533"
    },
    {
        "name": "Kurukshetra",
        "state": "HARYANA",
        "latitude": "29.962444",
        "longitude": "76.838151"
    },
    {
        "name": "Kurung Kumey",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.861258",
        "longitude": "93.499644"
    },
    {
        "name": "Kushinagar *",
        "state": "UTTAR PRADESH",
        "latitude": "26.907172",
        "longitude": "83.985134"
    },
    {
        "name": "Lahul &amp; Spiti",
        "state": "HIMACHAL PRADESH",
        "latitude": "32.574709",
        "longitude": "77.040806"
    },
    {
        "name": "Lakhimpur",
        "state": "ASSAM",
        "latitude": "27.236148",
        "longitude": "94.105136"
    },
    {
        "name": "Lakhisarai *",
        "state": "BIHAR",
        "latitude": "25.176411",
        "longitude": "86.090783"
    },
    {
        "name": "Lakshdweep",
        "state": "LAKSHADWEEP",
        "latitude": "10.568609",
        "longitude": "72.640306"
    },
    {
        "name": "Lalitpur",
        "state": "UTTAR PRADESH",
        "latitude": "24.691585",
        "longitude": "78.418609"
    },
    {
        "name": "Latehar",
        "state": "JHARKHAND",
        "latitude": "23.75162",
        "longitude": "84.509376"
    },
    {
        "name": "Latur",
        "state": "MAHARASHTRA",
        "latitude": "18.401122",
        "longitude": "76.576955"
    },
    {
        "name": "Leh(Ladakh)",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "34.138736",
        "longitude": "77.565158"
    },
    {
        "name": "Lohardaga",
        "state": "JHARKHAND",
        "latitude": "23.432486",
        "longitude": "84.681568"
    },
    {
        "name": "Lohit",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.925439",
        "longitude": "96.166869"
    },
    {
        "name": "Lower Dibang Valley",
        "state": "ARUNACHAL PRADESH",
        "latitude": "28.1375",
        "longitude": "95.798781"
    },
    {
        "name": "Lower Subansiri",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.5556",
        "longitude": "93.812343"
    },
    {
        "name": "Lucknow",
        "state": "UTTAR PRADESH",
        "latitude": "26.83323",
        "longitude": "80.943614"
    },
    {
        "name": "Ludhiana",
        "state": "PUNJAB",
        "latitude": "30.908679",
        "longitude": "75.851626"
    },
    {
        "name": "Lunglei",
        "state": "MIZORAM",
        "latitude": "22.888359",
        "longitude": "92.746609"
    },
    {
        "name": "Madhepura",
        "state": "BIHAR",
        "latitude": "25.921099",
        "longitude": "86.792579"
    },
    {
        "name": "Madhubani",
        "state": "BIHAR",
        "latitude": "26.356596",
        "longitude": "86.070431"
    },
    {
        "name": "Madurai",
        "state": "TAMIL NADU",
        "latitude": "9.924937",
        "longitude": "78.129356"
    },
    {
        "name": "Maharajganj",
        "state": "UTTAR PRADESH",
        "latitude": "27.146858",
        "longitude": "83.567801"
    },
    {
        "name": "Mahasamund *",
        "state": "CHHATTISGARH",
        "latitude": "21.09393",
        "longitude": "82.111104"
    },
    {
        "name": "Mahbubnagar",
        "state": "ANDHRA PRADESH",
        "latitude": "16.744426",
        "longitude": "77.991612"
    },
    {
        "name": "Mahendragarh",
        "state": "HARYANA",
        "latitude": "28.045836",
        "longitude": "76.11006"
    },
    {
        "name": "Mahesana",
        "state": "GUJARAT",
        "latitude": "23.60274",
        "longitude": "72.385689"
    },
    {
        "name": "Mahoba *",
        "state": "UTTAR PRADESH",
        "latitude": "25.286105",
        "longitude": "79.880627"
    },
    {
        "name": "Mainpuri",
        "state": "UTTAR PRADESH",
        "latitude": "27.229325",
        "longitude": "79.049369"
    },
    {
        "name": "Malappuram",
        "state": "KERALA",
        "latitude": "11.043786",
        "longitude": "76.085683"
    },
    {
        "name": "Maldah",
        "state": "WEST BENGAL",
        "latitude": "25.010231",
        "longitude": "88.147599"
    },
    {
        "name": "Malkangiri&nbsp; *",
        "state": "ORISSA",
        "latitude": "18.357914",
        "longitude": "81.897509"
    },
    {
        "name": "Mamit *",
        "state": "MIZORAM",
        "latitude": "23.942233",
        "longitude": "92.499553"
    },
    {
        "name": "Mandi",
        "state": "HIMACHAL PRADESH",
        "latitude": "31.711956",
        "longitude": "76.932031"
    },
    {
        "name": "Mandla",
        "state": "MADHYA PRADESH",
        "latitude": "22.605889",
        "longitude": "80.370917"
    },
    {
        "name": "Mandsaur",
        "state": "MADHYA PRADESH",
        "latitude": "24.063675",
        "longitude": "75.074883"
    },
    {
        "name": "Mandya",
        "state": "KARNATAKA",
        "latitude": "12.517368",
        "longitude": "76.898666"
    },
    {
        "name": "Mansa *",
        "state": "PUNJAB",
        "latitude": "29.986894",
        "longitude": "75.390143"
    },
    {
        "name": "Marigaon",
        "state": "ASSAM",
        "latitude": "26.255106",
        "longitude": "92.337553"
    },
    {
        "name": "Mathura",
        "state": "UTTAR PRADESH",
        "latitude": "27.494256",
        "longitude": "77.684411"
    },
    {
        "name": "Mau",
        "state": "UTTAR PRADESH",
        "latitude": "25.947961",
        "longitude": "83.561419"
    },
    {
        "name": "Mayurbhanj",
        "state": "ORISSA",
        "latitude": "21.944929",
        "longitude": "86.725858"
    },
    {
        "name": "Medak",
        "state": "ANDHRA PRADESH",
        "latitude": "17.625811",
        "longitude": "78.082342"
    },
    {
        "name": "Meerut",
        "state": "UTTAR PRADESH",
        "latitude": "28.986554",
        "longitude": "77.70386"
    },
    {
        "name": "Mirzapur",
        "state": "UTTAR PRADESH",
        "latitude": "25.143896",
        "longitude": "82.562668"
    },
    {
        "name": "Moga *",
        "state": "PUNJAB",
        "latitude": "30.801361",
        "longitude": "75.162775"
    },
    {
        "name": "Mokokchung",
        "state": "NAGALAND",
        "latitude": "26.321208",
        "longitude": "94.519572"
    },
    {
        "name": "Mon",
        "state": "NAGALAND",
        "latitude": "26.723923",
        "longitude": "95.031768"
    },
    {
        "name": "Moradabad",
        "state": "UTTAR PRADESH",
        "latitude": "28.832848",
        "longitude": "78.780652"
    },
    {
        "name": "Morena",
        "state": "MADHYA PRADESH",
        "latitude": "26.500863",
        "longitude": "78.001752"
    },
    {
        "name": "Muktsar *",
        "state": "PUNJAB",
        "latitude": "30.463978",
        "longitude": "74.517016"
    },
    {
        "name": "Mumbai",
        "state": "MAHARASHTRA",
        "latitude": "18.987074",
        "longitude": "72.830007"
    },
    {
        "name": "Mumbai (Suburban) *",
        "state": "MAHARASHTRA",
        "latitude": "19.054135",
        "longitude": "72.832678"
    },
    {
        "name": "Munger",
        "state": "BIHAR",
        "latitude": "25.37403",
        "longitude": "86.47675"
    },
    {
        "name": "Murshidabad",
        "state": "WEST BENGAL",
        "latitude": "24.100513",
        "longitude": "88.278789"
    },
    {
        "name": "Muzaffarnagar",
        "state": "UTTAR PRADESH",
        "latitude": "29.471716",
        "longitude": "77.700412"
    },
    {
        "name": "Muzaffarpur",
        "state": "BIHAR",
        "latitude": "26.117382",
        "longitude": "85.406908"
    },
    {
        "name": "Mysore",
        "state": "KARNATAKA",
        "latitude": "12.309442",
        "longitude": "76.654533"
    },
    {
        "name": "Nabarangapur&nbsp; *",
        "state": "ORISSA",
        "latitude": "19.224792",
        "longitude": "82.557829"
    },
    {
        "name": "Nadia",
        "state": "WEST BENGAL",
        "latitude": "23.418592",
        "longitude": "88.504458"
    },
    {
        "name": "Nagaon",
        "state": "ASSAM",
        "latitude": "26.355771",
        "longitude": "92.686525"
    },
    {
        "name": "Nagapattinam&nbsp; *",
        "state": "TAMIL NADU",
        "latitude": "10.770587",
        "longitude": "79.834871"
    },
    {
        "name": "Nagaur",
        "state": "RAJASTHAN",
        "latitude": "27.200302",
        "longitude": "73.736974"
    },
    {
        "name": "Nagpur",
        "state": "MAHARASHTRA",
        "latitude": "21.148204",
        "longitude": "79.096814"
    },
    {
        "name": "Nainital",
        "state": "UTTARANCHAL",
        "latitude": "29.380565",
        "longitude": "79.470524"
    },
    {
        "name": "Nalanda",
        "state": "BIHAR",
        "latitude": "25.194764",
        "longitude": "85.521417"
    },
    {
        "name": "Nalbari",
        "state": "ASSAM",
        "latitude": "26.444776",
        "longitude": "91.445234"
    },
    {
        "name": "Nalgonda",
        "state": "ANDHRA PRADESH",
        "latitude": "17.061325",
        "longitude": "79.267503"
    },
    {
        "name": "Namakkal&nbsp;&nbsp; *",
        "state": "TAMIL NADU",
        "latitude": "11.225821",
        "longitude": "78.171836"
    },
    {
        "name": "Nanded",
        "state": "MAHARASHTRA",
        "latitude": "19.159314",
        "longitude": "77.313188"
    },
    {
        "name": "Nandurbar *",
        "state": "MAHARASHTRA",
        "latitude": "21.36675",
        "longitude": "74.244736"
    },
    {
        "name": "Narmada&nbsp; *",
        "state": "GUJARAT",
        "latitude": "21.875823",
        "longitude": "73.499823"
    },
    {
        "name": "Narsimhapur",
        "state": "MADHYA PRADESH",
        "latitude": "22.948386",
        "longitude": "79.193312"
    },
    {
        "name": "Nashik",
        "state": "MAHARASHTRA",
        "latitude": "20.006006",
        "longitude": "73.795878"
    },
    {
        "name": "Navsari&nbsp; *",
        "state": "GUJARAT",
        "latitude": "20.948755",
        "longitude": "72.925226"
    },
    {
        "name": "Nawada",
        "state": "BIHAR",
        "latitude": "24.887955",
        "longitude": "85.543198"
    },
    {
        "name": "Nawanshahr *",
        "state": "PUNJAB",
        "latitude": "31.120012",
        "longitude": "76.130554"
    },
    {
        "name": "Nayagarh&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.120189",
        "longitude": "85.098925"
    },
    {
        "name": "Neemuch *",
        "state": "MADHYA PRADESH",
        "latitude": "24.473691",
        "longitude": "74.876342"
    },
    {
        "name": "Nellore",
        "state": "ANDHRA PRADESH",
        "latitude": "14.449206",
        "longitude": "79.983616"
    },
    {
        "name": "Nizamabad",
        "state": "ANDHRA PRADESH",
        "latitude": "18.654235",
        "longitude": "78.09389"
    },
    {
        "name": "North",
        "state": "SIKKIM",
        "latitude": "27.50395",
        "longitude": "88.536203"
    },
    {
        "name": "North Cachar Hills",
        "state": "ASSAM",
        "latitude": "25.167627",
        "longitude": "93.015884"
    },
    {
        "name": "North Goa",
        "state": "GOA",
        "latitude": "15.480081",
        "longitude": "73.822329"
    },
    {
        "name": "North Tripura",
        "state": "TRIPURA",
        "latitude": "24.342116",
        "longitude": "92.017914"
    },
    {
        "name": "North Twenty Four Pargana",
        "state": "WEST BENGAL",
        "latitude": "22.724797",
        "longitude": "88.507529"
    },
    {
        "name": "Nuapada&nbsp; *",
        "state": "ORISSA",
        "latitude": "20.819327",
        "longitude": "82.555776"
    },
    {
        "name": "Osmanabad",
        "state": "MAHARASHTRA",
        "latitude": "18.181663",
        "longitude": "76.041686"
    },
    {
        "name": "Pachim Sionghum",
        "state": "JHARKHAND",
        "latitude": "22.554553",
        "longitude": "85.808737"
    },
    {
        "name": "Pakaur *",
        "state": "JHARKHAND",
        "latitude": "24.635842",
        "longitude": "87.834711"
    },
    {
        "name": "Palakkad",
        "state": "KERALA",
        "latitude": "10.772089",
        "longitude": "76.658319"
    },
    {
        "name": "Palamu",
        "state": "JHARKHAND",
        "latitude": "24.040242",
        "longitude": "84.069328"
    },
    {
        "name": "Pali",
        "state": "RAJASTHAN",
        "latitude": "25.777043",
        "longitude": "73.322215"
    },
    {
        "name": "Panch Mahals",
        "state": "GUJARAT",
        "latitude": "22.772915",
        "longitude": "73.60953"
    },
    {
        "name": "Panchkula *",
        "state": "HARYANA",
        "latitude": "30.722619",
        "longitude": "76.880191"
    },
    {
        "name": "Panipat",
        "state": "HARYANA",
        "latitude": "29.387951",
        "longitude": "76.968552"
    },
    {
        "name": "Panna",
        "state": "MADHYA PRADESH",
        "latitude": "24.719464",
        "longitude": "80.189266"
    },
    {
        "name": "Papum Pare *",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.101465",
        "longitude": "93.597901"
    },
    {
        "name": "Parbhani",
        "state": "MAHARASHTRA",
        "latitude": "19.268358",
        "longitude": "76.777025"
    },
    {
        "name": "Paschim Medinapur",
        "state": "WEST BENGAL",
        "latitude": "22.42833",
        "longitude": "87.323882"
    },
    {
        "name": "Pashchim Champaran",
        "state": "BIHAR",
        "latitude": "26.804014",
        "longitude": "84.510335"
    },
    {
        "name": "Patan&nbsp; *",
        "state": "GUJARAT",
        "latitude": "23.845103",
        "longitude": "72.111466"
    },
    {
        "name": "Pathanamthitta",
        "state": "KERALA",
        "latitude": "9.294782",
        "longitude": "76.75528"
    },
    {
        "name": "Patiala",
        "state": "PUNJAB",
        "latitude": "30.317367",
        "longitude": "76.407038"
    },
    {
        "name": "Patna",
        "state": "BIHAR",
        "latitude": "25.603125",
        "longitude": "85.119195"
    },
    {
        "name": "Perambalur",
        "state": "TAMIL NADU",
        "latitude": "11.243109",
        "longitude": "78.866417"
    },
    {
        "name": "Phek",
        "state": "NAGALAND",
        "latitude": "25.701797",
        "longitude": "94.465739"
    },
    {
        "name": "Pilibhit",
        "state": "UTTAR PRADESH",
        "latitude": "28.634994",
        "longitude": "79.812128"
    },
    {
        "name": "Pithoragarh",
        "state": "UTTARANCHAL",
        "latitude": "29.583696",
        "longitude": "80.203698"
    },
    {
        "name": "Pondicherry",
        "state": "PONDICHERRY",
        "latitude": "11.935363",
        "longitude": "79.83229"
    },
    {
        "name": "Porbandar",
        "state": "GUJARAT",
        "latitude": "21.636581",
        "longitude": "69.59674"
    },
    {
        "name": "Prakasam",
        "state": "ANDHRA PRADESH",
        "latitude": "15.514451",
        "longitude": "80.048738"
    },
    {
        "name": "Pratapgarh",
        "state": "UTTAR PRADESH",
        "latitude": "25.93741",
        "longitude": "81.995137"
    },
    {
        "name": "Pudukkottai",
        "state": "TAMIL NADU",
        "latitude": "10.383944",
        "longitude": "78.81216"
    },
    {
        "name": "Punch",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "33.773791",
        "longitude": "74.081247"
    },
    {
        "name": "Pune",
        "state": "MAHARASHTRA",
        "latitude": "18.525994",
        "longitude": "73.862602"
    },
    {
        "name": "Purba Champaran",
        "state": "BIHAR",
        "latitude": "26.653574",
        "longitude": "84.925161"
    },
    {
        "name": "Purba Medinapur",
        "state": "WEST BENGAL",
        "latitude": "22.301044",
        "longitude": "87.919817"
    },
    {
        "name": "Purbi Singhbhum",
        "state": "JHARKHAND",
        "latitude": "22.799522",
        "longitude": "86.197389"
    },
    {
        "name": "Puri",
        "state": "ORISSA",
        "latitude": "19.79549",
        "longitude": "85.838807"
    },
    {
        "name": "Purnia",
        "state": "BIHAR",
        "latitude": "25.777226",
        "longitude": "87.47066"
    },
    {
        "name": "Puruliya",
        "state": "WEST BENGAL",
        "latitude": "23.332193",
        "longitude": "86.366718"
    },
    {
        "name": "Rae Bareli",
        "state": "UTTAR PRADESH",
        "latitude": "26.231689",
        "longitude": "81.230631"
    },
    {
        "name": "Raichur",
        "state": "KARNATAKA",
        "latitude": "16.207752",
        "longitude": "77.358779"
    },
    {
        "name": "Raigarh",
        "state": "CHHATTISGARH",
        "latitude": "21.908949",
        "longitude": "83.395958"
    },
    {
        "name": "Raigarh",
        "state": "MAHARASHTRA",
        "latitude": "18.646539",
        "longitude": "72.875994"
    },
    {
        "name": "Raipur",
        "state": "CHHATTISGARH",
        "latitude": "21.227374",
        "longitude": "81.629069"
    },
    {
        "name": "Raisen",
        "state": "MADHYA PRADESH",
        "latitude": "23.33011",
        "longitude": "77.780588"
    },
    {
        "name": "Rajgarh",
        "state": "MADHYA PRADESH",
        "latitude": "24.005868",
        "longitude": "76.739744"
    },
    {
        "name": "Rajkot",
        "state": "GUJARAT",
        "latitude": "22.295207",
        "longitude": "70.805355"
    },
    {
        "name": "Rajnandgaon",
        "state": "CHHATTISGARH",
        "latitude": "21.089426",
        "longitude": "81.034625"
    },
    {
        "name": "Rajsamand *",
        "state": "RAJASTHAN",
        "latitude": "25.075336",
        "longitude": "73.860393"
    },
    {
        "name": "Ramanathapuram",
        "state": "TAMIL NADU",
        "latitude": "9.363516",
        "longitude": "78.840969"
    },
    {
        "name": "Rampur",
        "state": "UTTAR PRADESH",
        "latitude": "28.791807",
        "longitude": "79.029148"
    },
    {
        "name": "Ranchi",
        "state": "JHARKHAND",
        "latitude": "23.363068",
        "longitude": "85.340321"
    },
    {
        "name": "Ratlam",
        "state": "MADHYA PRADESH",
        "latitude": "23.327034",
        "longitude": "75.040755"
    },
    {
        "name": "Ratnagiri",
        "state": "MAHARASHTRA",
        "latitude": "16.990597",
        "longitude": "73.297537"
    },
    {
        "name": "Rayagada&nbsp; *",
        "state": "ORISSA",
        "latitude": "19.165286",
        "longitude": "83.412105"
    },
    {
        "name": "Rewa",
        "state": "MADHYA PRADESH",
        "latitude": "24.540725",
        "longitude": "81.288305"
    },
    {
        "name": "Rewari",
        "state": "HARYANA",
        "latitude": "28.198138",
        "longitude": "76.615433"
    },
    {
        "name": "Ri Bhoi&nbsp; *",
        "state": "MEGHALAYA",
        "latitude": "25.915944",
        "longitude": "91.88132"
    },
    {
        "name": "Rohtak",
        "state": "HARYANA",
        "latitude": "28.888214",
        "longitude": "76.587935"
    },
    {
        "name": "Rohtas",
        "state": "BIHAR",
        "latitude": "24.92088",
        "longitude": "84.039698"
    },
    {
        "name": "Rudraprayag *",
        "state": "UTTARANCHAL",
        "latitude": "30.29541",
        "longitude": "78.986665"
    },
    {
        "name": "Rupnagar",
        "state": "PUNJAB",
        "latitude": "30.964466",
        "longitude": "76.526375"
    },
    {
        "name": "Sabar Kantha",
        "state": "GUJARAT",
        "latitude": "23.605115",
        "longitude": "72.96492"
    },
    {
        "name": "Sagar",
        "state": "MADHYA PRADESH",
        "latitude": "23.837188",
        "longitude": "78.749867"
    },
    {
        "name": "Saharanpur",
        "state": "UTTAR PRADESH",
        "latitude": "29.965049",
        "longitude": "77.553476"
    },
    {
        "name": "Saharsa",
        "state": "BIHAR",
        "latitude": "25.872235",
        "longitude": "86.59889"
    },
    {
        "name": "Sahibganj",
        "state": "JHARKHAND",
        "latitude": "25.244524",
        "longitude": "87.632966"
    },
    {
        "name": "Saiha *",
        "state": "MIZORAM",
        "latitude": "22.513447",
        "longitude": "92.979389"
    },
    {
        "name": "Salem",
        "state": "TAMIL NADU",
        "latitude": "11.65821",
        "longitude": "78.152968"
    },
    {
        "name": "Samastipur",
        "state": "BIHAR",
        "latitude": "25.846512",
        "longitude": "85.779185"
    },
    {
        "name": "Sambalpur",
        "state": "ORISSA",
        "latitude": "21.466623",
        "longitude": "83.986047"
    },
    {
        "name": "Sangli",
        "state": "MAHARASHTRA",
        "latitude": "16.860757",
        "longitude": "74.57878"
    },
    {
        "name": "Sangrur",
        "state": "PUNJAB",
        "latitude": "30.241479",
        "longitude": "75.841924"
    },
    {
        "name": "Sant Kabir Nagar *",
        "state": "UTTAR PRADESH",
        "latitude": "26.778133",
        "longitude": "83.086966"
    },
    {
        "name": "Sant Ravidas Nagar *",
        "state": "UTTAR PRADESH",
        "latitude": "25.335702",
        "longitude": "82.46387"
    },
    {
        "name": "Saraikela",
        "state": "JHARKHAND",
        "latitude": "22.715002",
        "longitude": "85.939556"
    },
    {
        "name": "Saran",
        "state": "BIHAR",
        "latitude": "25.777293",
        "longitude": "84.751385"
    },
    {
        "name": "Satara",
        "state": "MAHARASHTRA",
        "latitude": "17.690393",
        "longitude": "74.010744"
    },
    {
        "name": "Satna",
        "state": "MADHYA PRADESH",
        "latitude": "24.566488",
        "longitude": "80.833433"
    },
    {
        "name": "Sawai Madhopur",
        "state": "RAJASTHAN",
        "latitude": "25.987844",
        "longitude": "76.381194"
    },
    {
        "name": "Sehore",
        "state": "MADHYA PRADESH",
        "latitude": "23.206208",
        "longitude": "77.085006"
    },
    {
        "name": "Senapati",
        "state": "MANIPUR",
        "latitude": "25.302888",
        "longitude": "94.048471"
    },
    {
        "name": "Seoni",
        "state": "MADHYA PRADESH",
        "latitude": "22.088143",
        "longitude": "79.548337"
    },
    {
        "name": "Serchhip *",
        "state": "MIZORAM",
        "latitude": "23.3256",
        "longitude": "92.864991"
    },
    {
        "name": "Shahdol",
        "state": "MADHYA PRADESH",
        "latitude": "23.294345",
        "longitude": "81.360684"
    },
    {
        "name": "Shahjahanpur",
        "state": "UTTAR PRADESH",
        "latitude": "27.871092",
        "longitude": "79.908609"
    },
    {
        "name": "Shajapur",
        "state": "MADHYA PRADESH",
        "latitude": "23.423091",
        "longitude": "76.280682"
    },
    {
        "name": "Sheikhpura *",
        "state": "BIHAR",
        "latitude": "25.147495",
        "longitude": "85.839471"
    },
    {
        "name": "Sheohar *",
        "state": "BIHAR",
        "latitude": "26.514445",
        "longitude": "85.29636"
    },
    {
        "name": "Sheopur *",
        "state": "MADHYA PRADESH",
        "latitude": "25.676035",
        "longitude": "76.698332"
    },
    {
        "name": "Shimla",
        "state": "HIMACHAL PRADESH",
        "latitude": "31.10003",
        "longitude": "77.171181"
    },
    {
        "name": "Shimoga",
        "state": "KARNATAKA",
        "latitude": "13.930893",
        "longitude": "75.576068"
    },
    {
        "name": "Shivpuri",
        "state": "MADHYA PRADESH",
        "latitude": "25.42602",
        "longitude": "77.653283"
    },
    {
        "name": "Shrawasti *",
        "state": "UTTAR PRADESH",
        "latitude": "27.700545",
        "longitude": "81.931928"
    },
    {
        "name": "Sibsagar",
        "state": "ASSAM",
        "latitude": "26.984297",
        "longitude": "94.639508"
    },
    {
        "name": "Siddharthnagar",
        "state": "UTTAR PRADESH",
        "latitude": "27.246253",
        "longitude": "83.066141"
    },
    {
        "name": "Sidhi",
        "state": "MADHYA PRADESH",
        "latitude": "24.409558",
        "longitude": "81.883792"
    },
    {
        "name": "Sikar",
        "state": "RAJASTHAN",
        "latitude": "27.610617",
        "longitude": "75.147048"
    },
    {
        "name": "Simdega",
        "state": "JHARKHAND",
        "latitude": "22.615172",
        "longitude": "84.502538"
    },
    {
        "name": "Sindhudurg",
        "state": "MAHARASHTRA",
        "latitude": "16.107985",
        "longitude": "73.714977"
    },
    {
        "name": "Sirmaur",
        "state": "HIMACHAL PRADESH",
        "latitude": "30.525617",
        "longitude": "77.230732"
    },
    {
        "name": "Sirohi",
        "state": "RAJASTHAN",
        "latitude": "24.89138",
        "longitude": "72.857774"
    },
    {
        "name": "Sirsa",
        "state": "HARYANA",
        "latitude": "29.531177",
        "longitude": "75.026343"
    },
    {
        "name": "Sitamarhi",
        "state": "BIHAR",
        "latitude": "26.59391",
        "longitude": "85.496766"
    },
    {
        "name": "Sitapur",
        "state": "UTTAR PRADESH",
        "latitude": "27.563585",
        "longitude": "80.686343"
    },
    {
        "name": "Sivaganga",
        "state": "TAMIL NADU",
        "latitude": "9.860311",
        "longitude": "78.481581"
    },
    {
        "name": "Siwan",
        "state": "BIHAR",
        "latitude": "26.22132",
        "longitude": "84.361494"
    },
    {
        "name": "Solan",
        "state": "HIMACHAL PRADESH",
        "latitude": "30.910522",
        "longitude": "77.108405"
    },
    {
        "name": "Solapur",
        "state": "MAHARASHTRA",
        "latitude": "17.672099",
        "longitude": "75.907906"
    },
    {
        "name": "Sonbhadra",
        "state": "UTTAR PRADESH",
        "latitude": "24.687697",
        "longitude": "83.069029"
    },
    {
        "name": "Sonipat",
        "state": "HARYANA",
        "latitude": "28.979449",
        "longitude": "77.024728"
    },
    {
        "name": "Sonitpur",
        "state": "ASSAM",
        "latitude": "26.623221",
        "longitude": "92.791733"
    },
    {
        "name": "South",
        "state": "SIKKIM",
        "latitude": "27.163151",
        "longitude": "88.359601"
    },
    {
        "name": "South&nbsp; Twenty Four Pargan",
        "state": "WEST BENGAL",
        "latitude": "22.484754",
        "longitude": "88.265534"
    },
    {
        "name": "South Garo Hills *",
        "state": "MEGHALAYA",
        "latitude": "25.200104",
        "longitude": "90.645557"
    },
    {
        "name": "South Goa",
        "state": "GOA",
        "latitude": "15.304936",
        "longitude": "73.959411"
    },
    {
        "name": "South Tripura",
        "state": "TRIPURA",
        "latitude": "23.53045",
        "longitude": "91.485363"
    },
    {
        "name": "Srikakulam",
        "state": "ANDHRA PRADESH",
        "latitude": "18.296866",
        "longitude": "83.891833"
    },
    {
        "name": "Srinagar",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "34.083627",
        "longitude": "74.810746"
    },
    {
        "name": "Sultanpur",
        "state": "UTTAR PRADESH",
        "latitude": "26.262349",
        "longitude": "82.073784"
    },
    {
        "name": "Sundargarh",
        "state": "ORISSA",
        "latitude": "22.128217",
        "longitude": "84.048498"
    },
    {
        "name": "Supaul *",
        "state": "BIHAR",
        "latitude": "26.246247",
        "longitude": "86.644513"
    },
    {
        "name": "Surat",
        "state": "GUJARAT",
        "latitude": "21.205128",
        "longitude": "72.847119"
    },
    {
        "name": "Surendranagar",
        "state": "GUJARAT",
        "latitude": "22.732978",
        "longitude": "71.614645"
    },
    {
        "name": "Surguja",
        "state": "CHHATTISGARH",
        "latitude": "23.118939",
        "longitude": "83.207362"
    },
    {
        "name": "Tamenglong",
        "state": "MANIPUR",
        "latitude": "24.996325",
        "longitude": "93.502375"
    },
    {
        "name": "Tawang",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.587899",
        "longitude": "91.885444"
    },
    {
        "name": "Tehri Garhwal",
        "state": "UTTARANCHAL",
        "latitude": "30.376102",
        "longitude": "78.498598"
    },
    {
        "name": "Thane",
        "state": "MAHARASHTRA",
        "latitude": "19.205931",
        "longitude": "72.971198"
    },
    {
        "name": "Thanjavur",
        "state": "TAMIL NADU",
        "latitude": "10.785111",
        "longitude": "79.138403"
    },
    {
        "name": "The Dangs",
        "state": "GUJARAT",
        "latitude": "20.756817",
        "longitude": "73.689483"
    },
    {
        "name": "The Nilgiris",
        "state": "TAMIL NADU",
        "latitude": "11.415521",
        "longitude": "76.705867"
    },
    {
        "name": "Theni",
        "state": "TAMIL NADU",
        "latitude": "9.999588",
        "longitude": "77.464364"
    },
    {
        "name": "Thiruvallur",
        "state": "TAMIL NADU",
        "latitude": "13.153773",
        "longitude": "79.915219"
    },
    {
        "name": "Thiruvananthapuram",
        "state": "KERALA",
        "latitude": "8.490191",
        "longitude": "76.917805"
    },
    {
        "name": "Thiruvarur",
        "state": "TAMIL NADU",
        "latitude": "10.780886",
        "longitude": "79.626455"
    },
    {
        "name": "Thoothukkudi",
        "state": "TAMIL NADU",
        "latitude": "8.810166",
        "longitude": "78.148882"
    },
    {
        "name": "Thoubal",
        "state": "MANIPUR",
        "latitude": "24.637889",
        "longitude": "94.006052"
    },
    {
        "name": "Thrissur",
        "state": "KERALA",
        "latitude": "10.522671",
        "longitude": "76.21865"
    },
    {
        "name": "Tikamgarh",
        "state": "MADHYA PRADESH",
        "latitude": "24.743252",
        "longitude": "78.831962"
    },
    {
        "name": "Tinsukia",
        "state": "ASSAM",
        "latitude": "27.49208",
        "longitude": "95.370027"
    },
    {
        "name": "Tirap",
        "state": "ARUNACHAL PRADESH",
        "latitude": "26.991189",
        "longitude": "95.50663"
    },
    {
        "name": "Tiruchirappalli",
        "state": "TAMIL NADU",
        "latitude": "10.82225",
        "longitude": "78.681043"
    },
    {
        "name": "Tirunelveli",
        "state": "TAMIL NADU",
        "latitude": "8.730059",
        "longitude": "77.692464"
    },
    {
        "name": "Tiruvannamalai",
        "state": "TAMIL NADU",
        "latitude": "12.233386",
        "longitude": "79.07432"
    },
    {
        "name": "Tonk",
        "state": "RAJASTHAN",
        "latitude": "26.171361",
        "longitude": "75.788097"
    },
    {
        "name": "Tuensang",
        "state": "NAGALAND",
        "latitude": "26.229854",
        "longitude": "94.814512"
    },
    {
        "name": "Tumkur",
        "state": "KARNATAKA",
        "latitude": "13.353655",
        "longitude": "77.096527"
    },
    {
        "name": "Udaipur",
        "state": "RAJASTHAN",
        "latitude": "24.585424",
        "longitude": "73.686924"
    },
    {
        "name": "Udham Singh Nagar *",
        "state": "UTTARANCHAL",
        "latitude": "28.966203",
        "longitude": "79.396914"
    },
    {
        "name": "Udhampur",
        "state": "JAMMU &amp; KASHMIR",
        "latitude": "32.91258",
        "longitude": "75.108491"
    },
    {
        "name": "Udupi *",
        "state": "KARNATAKA",
        "latitude": "13.359567",
        "longitude": "74.759237"
    },
    {
        "name": "Ujjain",
        "state": "MADHYA PRADESH",
        "latitude": "23.185696",
        "longitude": "75.779601"
    },
    {
        "name": "Ukhrul",
        "state": "MANIPUR",
        "latitude": "25.091234",
        "longitude": "94.363891"
    },
    {
        "name": "Umaria *",
        "state": "MADHYA PRADESH",
        "latitude": "23.525654",
        "longitude": "80.837774"
    },
    {
        "name": "Una",
        "state": "HIMACHAL PRADESH",
        "latitude": "31.46426",
        "longitude": "76.268458"
    },
    {
        "name": "Unnao",
        "state": "UTTAR PRADESH",
        "latitude": "26.545632",
        "longitude": "80.489814"
    },
    {
        "name": "Upper Siang *",
        "state": "ARUNACHAL PRADESH",
        "latitude": "28.613345",
        "longitude": "95.066152"
    },
    {
        "name": "Upper Subansiri",
        "state": "ARUNACHAL PRADESH",
        "latitude": "28.029687",
        "longitude": "94.216858"
    },
    {
        "name": "Uttar Dinajpur",
        "state": "WEST BENGAL",
        "latitude": "25.609131",
        "longitude": "88.125952"
    },
    {
        "name": "Uttara Kannada",
        "state": "KARNATAKA",
        "latitude": "14.804209",
        "longitude": "74.131214"
    },
    {
        "name": "Uttarkashi",
        "state": "UTTARANCHAL",
        "latitude": "30.715986",
        "longitude": "78.430542"
    },
    {
        "name": "Vadodara",
        "state": "GUJARAT",
        "latitude": "22.287726",
        "longitude": "73.206027"
    },
    {
        "name": "Vaishali",
        "state": "BIHAR",
        "latitude": "25.676599",
        "longitude": "85.219298"
    },
    {
        "name": "Valsad",
        "state": "GUJARAT",
        "latitude": "20.631227",
        "longitude": "72.933378"
    },
    {
        "name": "Varanasi",
        "state": "UTTAR PRADESH",
        "latitude": "25.325043",
        "longitude": "82.975165"
    },
    {
        "name": "Vellore",
        "state": "TAMIL NADU",
        "latitude": "12.909641",
        "longitude": "79.139241"
    },
    {
        "name": "Vidisha",
        "state": "MADHYA PRADESH",
        "latitude": "23.531456",
        "longitude": "77.812138"
    },
    {
        "name": "Viluppuram",
        "state": "TAMIL NADU",
        "latitude": "11.936979",
        "longitude": "79.487333"
    },
    {
        "name": "Virudhunagar",
        "state": "TAMIL NADU",
        "latitude": "9.594003",
        "longitude": "77.952743"
    },
    {
        "name": "Visakhapatnam",
        "state": "ANDHRA PRADESH",
        "latitude": "17.724253",
        "longitude": "83.305865"
    },
    {
        "name": "Vizianagaram",
        "state": "ANDHRA PRADESH",
        "latitude": "18.124612",
        "longitude": "83.406912"
    },
    {
        "name": "Warangal",
        "state": "ANDHRA PRADESH",
        "latitude": "18.030289",
        "longitude": "79.57543"
    },
    {
        "name": "Wardha",
        "state": "MAHARASHTRA",
        "latitude": "20.735221",
        "longitude": "78.604456"
    },
    {
        "name": "Washim *",
        "state": "MAHARASHTRA",
        "latitude": "20.108935",
        "longitude": "77.142117"
    },
    {
        "name": "Wayanad",
        "state": "KERALA",
        "latitude": "11.606117",
        "longitude": "76.088347"
    },
    {
        "name": "West",
        "state": "SIKKIM",
        "latitude": "27.290085",
        "longitude": "88.244703"
    },
    {
        "name": "West Garo Hills",
        "state": "MEGHALAYA",
        "latitude": "25.505214",
        "longitude": "90.280827"
    },
    {
        "name": "West Godavari",
        "state": "ANDHRA PRADESH",
        "latitude": "16.719836",
        "longitude": "81.100761"
    },
    {
        "name": "West Kameng",
        "state": "ARUNACHAL PRADESH",
        "latitude": "27.264281",
        "longitude": "92.425854"
    },
    {
        "name": "West Khasi Hills",
        "state": "MEGHALAYA",
        "latitude": "25.518083",
        "longitude": "91.269445"
    },
    {
        "name": "West Nimar",
        "state": "MADHYA PRADESH",
        "latitude": "21.825248",
        "longitude": "75.61635"
    },
    {
        "name": "West Siang",
        "state": "ARUNACHAL PRADESH",
        "latitude": "28.168599",
        "longitude": "94.80047"
    },
    {
        "name": "West Tripura",
        "state": "TRIPURA",
        "latitude": "23.827795",
        "longitude": "91.274175"
    },
    {
        "name": "Wokha",
        "state": "NAGALAND",
        "latitude": "26.0917",
        "longitude": "94.258877"
    },
    {
        "name": "Yamunanagar",
        "state": "HARYANA",
        "latitude": "30.30369",
        "longitude": "77.307789"
    },
    {
        "name": "Yanam",
        "state": "PONDICHERRY",
        "latitude": "16.734771",
        "longitude": "82.213971"
    },
    {
        "name": "Yavatmal",
        "state": "MAHARASHTRA",
        "latitude": "20.3876",
        "longitude": "78.131472"
    },
    {
        "name": "Zunheboto",
        "state": "NAGALAND",
        "latitude": "26.009562",
        "longitude": "94.521241"
    }
]