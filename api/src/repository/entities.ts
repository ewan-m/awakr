// Access patterns
// - Create user
// - Retrieve user by email
// - Find users by partial name
// - Change user details
// - Form friendship between users
// - Create an alarm for a user
// - View upcoming alarms for all users friends
// - View alarms for a user

export type User = {
    email: string; // PK USER#email
    name: string; // HK USERNAME#
}