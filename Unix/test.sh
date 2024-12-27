read -p "Enter Booking ID: " booking_id
read -p "Enter Email ID: " email_id
awk -F',' -v id=$booking_id -v new_email=$email_id 'BEGIN {OFS=","} $1 == id {$4 = new_email} {print}
' Customer.txt > updated_customer.txt 
mv updated_customer.txt Customer.txt