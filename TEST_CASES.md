# Test Cases for PrimeUniversityAdmission

## Home Page Tests

### Test Case 1: Navigation Menu

1. Load index.html
2. Hover over "Admissions" menu
3. Click on "Undergraduate"

- **Expected**: Dropdown opens and navigates to undergraduate page

### Test Case 2: Banner Auto-Slide

1. Load index.html
2. Wait 5 seconds

- **Expected**: Banner automatically slides to next image

### Test Case 3: Mobile Responsiveness

1. Open in mobile browser or resize window to <768px
2. Click navbar toggle

- **Expected**: Menu collapses and can be toggled

## Registration Form Tests

### Test Case 4: Required Field Validation

1. Go to register.html
2. Click Submit without entering any data

- **Expected**: Red error messages show for all required fields

### Test Case 5: Email Validation

1. Enter "invalid-email" in email field
2. Click Submit

- **Expected**: Error shows "Please provide a valid email address"

### Test Case 6: Phone Validation

1. Enter "123" in phone field
2. Click Submit

- **Expected**: Error shows "Please enter a valid phone number (10-15 digits)"

### Test Case 7: GPA Validation

1. Enter "4.5" in GPA field
2. Click Submit

- **Expected**: Error shows "GPA must be between 0 and 4"

### Test Case 8: File Upload Validation

1. Select a text file for passport photo
2. Click Submit

- **Expected**: Error shows "Please upload your passport photo" (accepts only images)

### Test Case 9: Successful Submission

1. Fill all fields with valid data
2. Check terms checkbox
3. Click Submit

- **Expected**: Alert shows "Form submitted successfully!"
