# 📝 Dynamic Form Generator

A **Next.js 15** project for generating dynamic forms with customizable fields.

## 🚀 Features

- **Dynamic Form Rendering**: Generate forms based on JSON structure.
- **Reusable Components**: Modular architecture for scalability.
- **Validation & State Management**: Integrated with `useForm()` for handling form states.
- **Optimized API Handling**: Centralized API factory with request aborting.
- **Modern UI**: Built with Tailwind CSS & Radix UI.

---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites

- **Node.js v20.10.0**
- **npm** or **yarn** installed

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/panahi-projects/react-dynamic-form-generator
cd react-dynamic-form-generator
```

### 3️⃣ Install Dependencies

```sh
npm install
# or
yarn install
```

### 4️⃣ Start the Development Server

```sh
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to see the project in action.

### 📌 API Usage

This project uses a centralized API handler to manage requests efficiently.
Located in: utils/api.ts

#### Example API Usage:

```ts
import { api } from "@/utils/api";

const fetchData = async () => {
  const response = await api.get("/submissions");

  if (response.success) {
    console.log("Data:", response.data);
  } else {
    console.error("Error:", response.error);
  }
};
```

### 🔥 Assumptions & Notes

- The project requires Node.js v20.10.0.
- Form validation is handled using useForm().
- Uses AbortController to prevent duplicate API calls when switching routes.
- The form structure must be provided as a JSON object.

### JSON example

```json
[
  {
    "formId": "health_insurance_application",
    "title": "Health Insurance Application",
    "fields": [
      {
        "id": "personal_info",
        "label": "Personal Information",
        "type": "group",
        "fields": [
          {
            "id": "first_name",
            "label": "First Name",
            "type": "text",
            "required": true
          },
          {
            "id": "last_name",
            "label": "Last Name",
            "type": "text",
            "required": true
          },
          {
            "id": "dob",
            "label": "Date of Birth",
            "type": "date",
            "required": true
          }
        ]
      },
      {
        "id": "address",
        "label": "Address",
        "type": "group",
        "fields": [
          {
            "id": "country",
            "label": "Country",
            "type": "select",
            "options": ["USA", "Canada", "Germany", "France"],
            "required": true
          },
          {
            "id": "state",
            "label": "State",
            "type": "select",
            "required": false,
            "dynamicOptions": {
              "dependsOn": "country",
              "endpoint": "/api/getStates",
              "method": "GET"
            }
          },
          {
            "id": "city",
            "label": "City",
            "type": "text",
            "required": true
          }
        ]
      },
      {
        "id": "health_info",
        "label": "Health Information",
        "type": "group",
        "fields": [
          {
            "id": "smoker",
            "label": "Do you smoke?",
            "type": "radio",
            "options": ["Yes", "No"],
            "required": true
          },
          {
            "id": "smoking_frequency",
            "label": "How often do you smoke?",
            "type": "select",
            "options": ["Occasionally", "Daily", "Heavy"],
            "required": true,
            "visibility": {
              "dependsOn": "smoker",
              "condition": "equals",
              "value": "Yes"
            }
          }
        ]
      }
    ]
  },
  {
    "formId": "home_insurance_application",
    "title": "Home Insurance Application",
    "fields": [
      {
        "id": "home_owner",
        "label": "Are you the homeowner?",
        "type": "radio",
        "options": ["Yes", "No"],
        "required": true
      },
      {
        "id": "property_type",
        "label": "Property Type",
        "type": "select",
        "options": ["House", "Apartment", "Condo"],
        "required": true
      },
      {
        "id": "home_value",
        "label": "Estimated Home Value (USD)",
        "type": "number",
        "required": true,
        "validation": {
          "min": 50000,
          "max": 5000000
        }
      },
      {
        "id": "has_security_system",
        "label": "Do you have a home security system?",
        "type": "radio",
        "options": ["Yes", "No"],
        "required": true
      },
      {
        "id": "security_system_type",
        "label": "Security System Type",
        "type": "select",
        "options": ["Monitored", "Unmonitored", "Smart Home System"],
        "required": true,
        "visibility": {
          "dependsOn": "has_security_system",
          "condition": "equals",
          "value": "Yes"
        }
      },
      {
        "id": "fire_safety",
        "label": "Do you have fire safety measures?",
        "type": "checkbox",
        "options": [
          "Smoke Detectors",
          "Fire Extinguishers",
          "Sprinkler System"
        ],
        "required": true
      },
      {
        "id": "home_address",
        "label": "Home Address",
        "type": "group",
        "fields": [
          {
            "id": "street",
            "label": "Street Address",
            "type": "text",
            "required": true
          },
          {
            "id": "city",
            "label": "City",
            "type": "text",
            "required": true
          },
          {
            "id": "state",
            "label": "State",
            "type": "select",
            "required": false,
            "dynamicOptions": {
              "dependsOn": "country",
              "endpoint": "/api/getStates",
              "method": "GET"
            }
          },
          {
            "id": "zip_code",
            "label": "ZIP Code",
            "type": "text",
            "required": true,
            "validation": {
              "pattern": "^[0-9]{5}$"
            }
          }
        ]
      },
      {
        "id": "insurance_coverage",
        "label": "Coverage Type",
        "type": "select",
        "options": ["Basic", "Comprehensive", "Premium"],
        "required": true
      }
    ]
  },
  {
    "formId": "car_insurance_application",
    "title": "Car Insurance Application",
    "fields": [
      {
        "id": "car_owner",
        "label": "Are you the primary car owner?",
        "type": "radio",
        "options": ["Yes", "No"],
        "required": true
      },
      {
        "id": "vehicle_info",
        "label": "Vehicle Information",
        "type": "group",
        "fields": [
          {
            "id": "car_make",
            "label": "Car Make",
            "type": "text",
            "required": true
          },
          {
            "id": "car_model",
            "label": "Car Model",
            "type": "text",
            "required": true
          },
          {
            "id": "car_year",
            "label": "Year of Manufacture",
            "type": "number",
            "required": true,
            "validation": {
              "min": 1990,
              "max": 2025
            }
          },
          {
            "id": "car_usage",
            "label": "How do you use your car?",
            "type": "select",
            "options": ["Personal", "Commercial", "Rideshare"],
            "required": true
          }
        ]
      },
      {
        "id": "driving_record",
        "label": "Driving Record",
        "type": "group",
        "fields": [
          {
            "id": "accidents_last_5_years",
            "label": "Have you had any accidents in the last 5 years?",
            "type": "radio",
            "options": ["Yes", "No"],
            "required": true
          },
          {
            "id": "accident_count",
            "label": "How many accidents?",
            "type": "number",
            "required": true,
            "visibility": {
              "dependsOn": "accidents_last_5_years",
              "condition": "equals",
              "value": "Yes"
            }
          },
          {
            "id": "license_suspensions",
            "label": "Have you ever had your license suspended?",
            "type": "radio",
            "options": ["Yes", "No"],
            "required": true
          }
        ]
      },
      {
        "id": "insurance_history",
        "label": "Previous Insurance Provider",
        "type": "select",
        "options": ["None", "State Farm", "Geico", "Progressive", "Allstate"],
        "required": true
      },
      {
        "id": "desired_coverage",
        "label": "Desired Coverage Type",
        "type": "select",
        "options": ["Liability Only", "Full Coverage", "Comprehensive"],
        "required": true
      },
      {
        "id": "roadside_assistance",
        "label": "Do you want Roadside Assistance?",
        "type": "radio",
        "options": ["Yes", "No"],
        "required": true
      }
    ]
  }
]
```

### 📜 License

This project is MIT licensed.
Feel free to contribute and modify.

### 🎯 Future Improvements

- Add server-side validation for form inputs.
- Implement custom form themes.
- Enhance form analytics & submission tracking.

---

👨‍💻 Developed by Saeed Panahi &nbsp; | &nbsp;
📌 GitHub: [Panahi projects](https://github.com/panahi-projects) &nbsp; | &nbsp;
📧 Contact: panahi.projects@gmail.com
