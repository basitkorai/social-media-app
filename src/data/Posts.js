

const posts = [
  {
    "post_id": "1",
    "user": {
      "user_id": "001",
      "name": "Alice",
      "avatar": "https://images.pexels.com/photos/18369366/pexels-photo-18369366/free-photo-of-tet-holiday-in-vietnam.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    "post_image": "https://images.pexels.com/photos/1335115/pexels-photo-1335115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "post_date": "September 14, 2023",
    "text": "Enjoying a beautiful sunset.",
    "likes": 100,
    "comments": [
      {
        "comment_id": "1",
        "user_id": "002",
        "name": "Julie Allison",
        "comment_text": "Wow, that's beautiful!"
      },
      {
        "comment_id": "2",
        "user_id": "003",
        "name": "Charlie",
        "comment_text": "I wish I was there!"
      }
    ]
  },
  {
    "post_id": "2",
    "user": {
      "user_id": "002",
      "name": "Julie Allison",
      "avatar": "https://example.com/images/bob_avatar.jpg"
    },
    "post_image": "https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600",
    "post_date": "October 2, 2023",
    "text": "My new puppy!",
    "likes": 150,
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "He's adorable!"
      }
    ]
  },
  {
    "post_id": "3",
    "user": {
      "user_id": "003",
      "name": "Michael Downey",
      "avatar": "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "post_image": "https://images.pexels.com/photos/1400249/pexels-photo-1400249.jpeg?auto=compress&cs=tinysrgb&w=300",
    "post_date": "January 4, 2023",
    "text": "World Trade Center, New York City",
    "likes": "80k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  },
  {
    "post_id": "4",
    "user": {
      "user_id": "004",
      "name": "Noah Davis",
      "avatar": "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "post_image": "https://accidentallyretired.com/wp-content/uploads/2021/09/Atomic-Habits-by-James-Clear-768x576.jpg",
    "post_date": "3 hours ago",
    "text": "Checkout my review of Atomic Habits",
    "likes": "100k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  },
  {
    "post_id": "5",
    "user": {
      "user_id": "003",
      "name": "Michael Downey",
      "avatar": "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "post_image": "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "post_date": "9 hours ago",
    "text": "Captured this masterpiece while I was stuck in New York's Traffic",
    "likes": "60k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  },
  {
    "post_id": "6",
    "user": {
      "user_id": "005",
      "name": "Lucas Martin",
      "avatar": "https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "post_image": "https://images.pexels.com/photos/1498273/pexels-photo-1498273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "post_date": "Febuary, 10, 2022",
    "text": "Trying to learn Japanese",
    "likes": "40k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  },
  {
    "post_id": "7",
    "user": {
      "user_id": "006",
      "name": "Harper Jackson",
      "avatar": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "post_image": "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=400",
    "post_date": "November, 16, 2023",
    "text": "Packing up for a trip to Dublin",
    "likes": "78k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  },
  {
    "post_id": "8",
    "user": {
      "user_id": "006",
      "name": "Harper Jackson",
      "avatar": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "post_image": "https://images.pexels.com/photos/11403236/pexels-photo-11403236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "post_date": "March 4, 2023",
    "text": "Waiting for my car to be fixed in Dublin, it's freezing here.",
    "likes": "98k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  },
  {
    "post_id": "9",
    "user": {
      "user_id": "007",
      "name": "Charlotte Anderson",
      "avatar": "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "post_image": "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "post_date": "June 18, 2023",
    "text": "Reviewing tech is what I can do from the bottom of my heart.",
    "likes": "5.4k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  },
  {
    "post_id": "10",
    "user": {
      "user_id": "008",
      "name": "Alex Collins",
      "avatar": "https://images.pexels.com/photos/6975523/pexels-photo-6975523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "post_image": "https://images.pexels.com/photos/6975523/pexels-photo-6975523.jpeg?auto=compress&cs=tinysrgb&w=400",
    "post_date": "September 14, 2023",
    "text": "I always wonder, why can't stay away from Junk Food",
    "likes": "8.4k",
    "comments": [
      {
        "comment_id": "1",
        "user_id": "001",
        "name": "Alice",
        "comment_text": "Love it❤️"
      }
    ]
  }
]

export default posts