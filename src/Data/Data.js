const TELENGANA = [
  "Hyderabad",
  "Secundrabad",
  "Warangal",
  "Karimnagar",
  "Nizambad",
  "Hanmakonda",
  "Khammam",
  "Siddipet",
  "Ramagundam",
  "Medak",
  "SangaReddy",
  "Miryalaguda",
  "Mancherial",
  "Bhongir",
];
const TAMILNADU = [
  "Chennai",
  "Dindigul",
  "Madurai",
  "Coimabatore",
  "Salem",
  "Thanjavur",
  "Tiruppur",
  "Erode",
  "Vellore",
  "Sivakashi",
  "Karaikudi",
  "Kumbakonam",
  "Nagercoil",
  "Ambur",
];
const KARNATAKA = [
  "Banglore",
  "Bedar",
  "Bhalki",
  "Aurad",
  "Mysore",
  "Udupi",
  "Devanagar",
  "Ballari",
  "Dharwad",
  "Madikeri",
  "Hassan",
  "Karwar",
  "Haweri",
  "Chikkaballapur",
  "Haweri",
  "Madikeri",
];
const MAHARASTRA = [
  "Mumbai",
  "Pune",
  "Nashik",
  "Solapur",
  "Chandrapur",
  "Ahmedabad",
  "Nanded",
  "Aurangabad",
  "Nagpur",
  "Ahmednagar",
  "Thane",
  "Satara",
  "Ulhasnagar",
  "Vasaivirar",
  "Biwandi",
  "Ratnagiri",
];
const ANDHRAPRADESH = [
  "Vijayawada",
  "Vishakapatnam",
  "Nellore",
  "Guntur",
  "Tirupati",
  "Chittor",
  "Anantapur",
  "Ongole",
  "Kurnool",
  "Krishna",
  "Rajamundry",
  "Yanam",
  "Tenali",
  "E.Godavari",
  "W.Godavari",
  "Srikakulam",
];
const STATES = [
  "TELENGANA",
  "KARNATAKA",
  "MAHARASTRA",
  "TAMILNADU",
  "ANDHRAPRADESH",
];
const PROFESSIONS = [
  "A/C Repair",
  "Electrician",
  "Barber",
  "Pest Control Worker",
  "Plumber",
  "Cleaning",
  "Laundry Man",
  "Electrical Appliance Technician",
  "Gardener",
  "Painter",
  "Interior Designer",
  "Delivery Captain",
  "Kitchen Manager",
];
const REVIEW_DATA = [
  {
    Username: "Ramesh",
    Rating: 4,
    Comments:
      "Very Nice Service very good and fast response from the Technicians",
  },
  {
    Username: "Suresh",
    Rating: 4.5,
    Comments: "Thank you for making my work easier and comfortable",
  },
  {
    Username: "Ramesh",
    Rating: 4.6,
    Comments: "Good idea with and very skilled professionals",
  },
  {
    Username: "Manovikas",
    Rating: 4.8,
    Comments: "Good service and professionals are very polite",
  },
  {
    Username: "Shantan",
    Rating: 4.5,
    Comments:
      "Very Nice Service very good and fast response from the Technicians",
  },
  {
    Username: "Goutham",
    Rating: 5,
    Comments:
      "Very Nice Service very good and fast response from the Technicians",
  },
];
const GENDERS = ["Male", "Female", "Others"];
const RATING_BOOKINGS = [
  {
    id: 313258,
    type: "A/C Repair",
    bookingdate: "22-8-2023",
    time: "11am -12pm",
    modeofpayment: "COD",
    totalamount: "799.8",
    rating: 8,
  },
  {
    id: 298756,
    type: "Package Delivery",
    bookingdate: "22-8-2023",
    time: "8:30pm -8:45pm",
    modeofpayment: "COD",
    totalamount: "299.73",
    rating: 0,
  },
  {
    id: 813297,
    type: "A/C Repair",
    bookingdate: "01-01-2023",
    time: "9:30am - 10:45am",
    modeofpayment: "GooglePay",
    totalamount: "1118.75",
    rating: 4,
  },
  {
    id: 998745,
    type: "Gardening",
    bookingdate: "09-12-2022",
    time: "11am -12pm",
    modeofpayment: "Phone pe",
    totalamount: "299.18",
    rating: 6,
  },
  {
    id: 457893,
    type: "Kitchen Service",
    bookingdate: "15-12-2022",
    time: "2pm -3pm",
    modeofpayment: "Online",
    totalamount: "1299.98",
    rating: 0,
  },
];
const BOOKINGS = [
  {
    id: 313258,
    type: "A/C Repair",
    bookingdate: "22-8-2023",
    time: "11am -12pm",
    modeofpayment: "COD",
    totalamount: "599",
  },
  {
    id: 298756,
    type: "Package Delivery",
    bookingdate: "22-8-2023",
    time: "8:30pm -8:45pm",
    modeofpayment: "COD",
    totalamount: "299.73",
  },
  {
    id: 813297,
    type: "A/C Repair",
    bookingdate: "01-01-2023",
    time: "9:30am - 10:45am",
    modeofpayment: "GooglePay",
    totalamount: "1118.75",
  },
  {
    id: 998745,
    type: "Gardening",
    bookingdate: "09-12-2022",
    time: "11am -12pm",
    modeofpayment: "Phone pe",
    totalamount: "299.18",
  },
  {
    id: 457893,
    type: "Kitchen Service",
    bookingdate: "15-12-2022",
    time: "2pm -3pm",
    modeofpayment: "Online",
    totalamount: "1299.98",
  },
];

const ACSERVICE = [{ id: 1, name: "AC Repair", Price: 599 }];
const ELECTRICAL = [
  {
    id: 2,
    name: "Electrical Works",
    Price: 394,
  },
];
const HOMESALON = [
  {
    id: 3,
    name: "Home Salon Services",
    Price: 255,
  },
];
const PESTCONTROL = [
  {
    id: 4,
    name: "Pest Control Services",
    Price: 190,
  },
];
const PLUMBING = [
  {
    id: 5,
    name: "Plumbing services",
    Price: 825,
  },
];
const KITCHEN = [
  {
    id: 6,
    name: "Kitchen Cleaning Services",
    Price: 449,
  },
];
const WATERTANK = [
  {
    id: 7,
    name: "Water Tank Cleaning",
    Price: 1019,
  },
];
const LAUNDRY = [
  {
    id: 8,
    name: "Laundry Services",
    Price: 349,
  },
];
const APPLIANCE = [
  {
    id: 9,
    name: "Appliance Maintainence",
    Price: 359,
  },
];
const GARDENING = [
  {
    id: 10,
    name: "Gardening",
    Price: 280,
  },
];
const PAINTING = [
  {
    id: 11,
    name: "Painting Services",
    Price: 1899,
  },
];
const WASHING = [
  {
    id: 12,
    name: "Washing Utensils",
    Price: 169,
  },
];
const DELIVERY = [
  {
    id: 13,
    name: "Delivery of Package",
    Price: 258,
  },
];
const INTERIOR = [
  {
    id: 14,
    name: "Interior Designing",
    Price: 456,
  },
];

export {
  TELENGANA,
  TAMILNADU,
  KARNATAKA,
  MAHARASTRA,
  ANDHRAPRADESH,
  REVIEW_DATA,
  STATES,
  PROFESSIONS,
  GENDERS,
  BOOKINGS,
  RATING_BOOKINGS,
  PAINTING,
  ACSERVICE,
  INTERIOR,
  ELECTRICAL,
  PLUMBING,
  DELIVERY,
  WASHING,
  GARDENING,
  APPLIANCE,
  LAUNDRY,
  KITCHEN,
  WATERTANK,
  PESTCONTROL,
  HOMESALON,
};
