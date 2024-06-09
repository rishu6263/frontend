const doctorsData = [
    {
        "id":1,
      "name": "Dr. John Doe",
      "email": "john@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Cardiologist",
      "regId": 123456,
      "password": "password123",
      "regYear": 2015,
      "confirmPassWord": "password123"
    },
    {
        "id":2,
      "name": "Dr. Jane Smith",
      "email": "jane@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Pediatrician",
      "regId": 654321,
      "password": "securepass",
      "regYear": 2018,
      "confirmPassWord": "securepass"
    },
    {
        "id":3,
      "name": "Dr. Michael Johnson",
      "email": "michael@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Dermatologist",
      "regId": 987654,
      "password": "derma123",
      "regYear": 2016,
      "confirmPassWord": "derma123"
    },
    {
        "id":4,
      "name": "Dr. Sarah Lee",
      "email": "sarah@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Neurologist",
      "regId": 456789,
      "password": "neurologist",
      "regYear": 2017,
      "confirmPassWord": "neurologist"
    },
    {
        "id":5,
      "name": "Dr. David Brown",
      "email": "david@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Orthopedic Surgeon",
      "regId": 321654,
      "password": "ortho123",
      "regYear": 2019,
      "confirmPassWord": "ortho123"
    },
    {
        "id":6,
      "name": "Dr. Emily Taylor",
      "email": "emily@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Psychiatrist",
      "regId": 159753,
      "password": "psychiatrist",
      "regYear": 2020,
      "confirmPassWord": "psychiatrist"
    },
    {
        "id":7,
      "name": "Dr. Christopher White",
      "email": "chris@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Ophthalmologist",
      "regId": 852963,
      "password": "ophthalmo",
      "regYear": 2014,
      "confirmPassWord": "ophthalmo"
    },
    {
        "id":8,
      "name": "Dr. Olivia Green",
      "email": "olivia@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "ENT Specialist",
      "regId": 369852,
      "password": "ent123",
      "regYear": 2013,
      "confirmPassWord": "ent123"
    },
    {
        "id":9,
      "name": "Dr. William Black",
      "email": "william@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "General Practitioner",
      "regId": 147258,
      "password": "general123",
      "regYear": 2021,
      "confirmPassWord": "general123"
    },
    {
        "id":10,
      "name": "Dr. Mia Lopez",
      "email": "mia@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Gynecologist",
      "regId": 258147,
      "password": "gyno123",
      "regYear": 2012,
      "confirmPassWord": "gyno123"
    },
    {
        "id":11,
      "name": "Dr. John Doe",
      "email": "john@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Cardiologist",
      "regId": 123456,
      "password": "password123",
      "regYear": 2015,
      "confirmPassWord": "password123"
    },
    {
        "id":12,
      "name": "Dr. Jane Smith",
      "email": "jane@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Pediatrician",
      "regId": 654321,
      "password": "securepass",
      "regYear": 2018,
      "confirmPassWord": "securepass"
    },
    {
        "id":13,
      "name": "Dr. Michael Johnson",
      "email": "michael@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Dermatologist",
      "regId": 987654,
      "password": "derma123",
      "regYear": 2016,
      "confirmPassWord": "derma123"
    },
    {
        "id":14,
      "name": "Dr. Sarah Lee",
      "email": "sarah@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Neurologist",
      "regId": 456789,
      "password": "neurologist",
      "regYear": 2017,
      "confirmPassWord": "neurologist"
    },
    {
        "id":15,
      "name": "Dr. David Brown",
      "email": "david@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Orthopedic Surgeon",
      "regId": 321654,
      "password": "ortho123",
      "regYear": 2019,
      "confirmPassWord": "ortho123"
    },
    {
        "id":16,
      "name": "Dr. Emily Taylor",
      "email": "emily@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Psychiatrist",
      "regId": 159753,
      "password": "psychiatrist",
      "regYear": 2020,
      "confirmPassWord": "psychiatrist"
    },
    {
        "id":17,
      "name": "Dr. Christopher White",
      "email": "chris@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Ophthalmologist",
      "regId": 852963,
      "password": "ophthalmo",
      "regYear": 2014,
      "confirmPassWord": "ophthalmo"
    },
    {
        "id":18,
      "name": "Dr. Olivia Green",
      "email": "olivia@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "ENT Specialist",
      "regId": 369852,
      "password": "ent123",
      "regYear": 2013,
      "confirmPassWord": "ent123"
    },
    {
        "id":19,
      "name": "Dr. William Black",
      "email": "william@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "General Practitioner",
      "regId": 147258,
      "password": "general123",
      "regYear": 2021,
      "confirmPassWord": "general123"
    },
    {
        "id":20,
      "name": "Dr. Mia Lopez",
      "email": "mia@example.com",
      "image": "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Specialization": "Gynecologist",
      "regId": 258147,
      "password": "gyno123",
      "regYear": 2012,
      "confirmPassWord": "gyno123"
    }
  
  ];
  export default doctorsData;