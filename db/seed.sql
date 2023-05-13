--CREATE TABLE sneakers (
  -- id SERIAL PRIMARY KEY,
   --name TEXT NOT NULL,
--    brand TEXT NOT NULL, 
--    release_date DATE,
--    original_price INT,   
--    rating NUMERIC,
--    CHECK (rating >= 0 AND rating <= 5),
--    url_for_purchase TEXT,
--    is_favorite BOOLEAN DEFAULT FALSE
-- );

-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY,
--     reviewer TEXT NOT NULL,
--     title TEXT NOT NULL,
--     content TEXT NOT NULL,
--     rating NUMERIC,
--     CHECK (rating >= 0 AND rating <= 5),
--     sneaker_ID INTEGER NOT NULL REFERENCES sneakers (id)
--     ON DELETE CASCADE
-- );

\c sneakers_dev;

INSERT INTO sneakers (name, image_url, brand, release_date, price, purchase_url, rating, is_favorite) VALUES
('Air Jordan 1', 'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/081/144/943/original/55279_01.jpg.jpeg?action=crop&width=1000',  'Nike', 'April 1985', 65, 'https://www.ebay.com/itm/175546053592?chn=ps&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&mkscid=101&itemid=175546053592&targetid=1967088489036&device=c&mktype=pla&googleloc=9011003&poi=&campaignid=19646921471&mkgroupid=149852949350&rlsatarget=pla-1967088489036&abcId=9305263&merchantid=114156310&gclid=Cj0KCQjwu-KiBhCsARIsAPztUF1fNuXq8j9o87vxjm_qYXdXckG9aHdIitI8FgBkt6OC69F8O8DL9KIaAqc4EALw_wcB', 4, true),
('Air Jordan 4', 'https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/045/282/014/original/14904_01.jpg.jpeg?action=crop&width=1500', 'Nike', 'February 1989', 110, 'https://www.ebay.com/itm/255751490693?chn=ps&mkevt=1&mkcid=28&srsltid=AR57-fB0-EdbdrUWeewpEIYHUFeXNXhRL9RwwvwxY4fMnUBiiv5q0Kk2WUw', 3, false),
('Air Jordan 5', 'https://image.goat.com/transform/v1/attachments/product_template_pictures/images/043/581/677/original/4491.png.png?action=crop&width=1500', 'Nike', 'February 1990', 125, 'https://www.ebay.com/itm/115271205844?epid=20039840177&hash=item1ad6b303d4:g:p2sAAOSwXWhiG-Jz&amdata=enc%3AAQAIAAAAwJg9PkycRb8o9ttQo7eZxMPSB4BSxk%2BoEwaHDhjE9YVJJPCxQSGO1JL39trgpYO9l7jp1wCwZo%2F5UPG7KEakfHeBWJzHNULqyQ5WsdSu9n8Gxw2nFmNIZJM63p6CxLwBJczXC5l5rxcSaYzQfX4czF7AnbjIUrWUNLpRl9UWbseOLcP37%2B40RQO%2F7dreh6jzlatC0VSlfe%2BAQNc49%2By4VU43Hmm3TCdnYjR3e6R8FM8Q8BHOXC8eep5kvmMIEncEUw%3D%3D%7Ctkp%3ABk9SR_qN4-v_YQ', 4, true),
('Yeezy Boost 350', 'https://www.farfetch.com/https://media.blackandwhite-ff.com/10000/10000/9bbf9a36-8f77-48bd-9458-fbe77ecf0e81_Content_Container_550_YeezyBoost350V2Beluga.jpg', 'Adidas', 'June 2015', 200, 'https://www.ebay.com/itm/295568279500?epid=16039798036&hash=item44d13e07cc:g:-NsAAOSwrR1kEiDh&amdata=enc%3AAQAIAAAA4FaWHcqVx%2Bv4FWAvmnKx4OtDnQbGl%2BBMI5EP4dNd%2B6TJAllvgL2XDB7BUjsLSb%2Fr%2F2gzqItoLIkvaDSrm5vWIFzRzNWaXdtWc1ZoD9pFlPtriCfpHpK2YE4%2FWdFaoqHhWmaSb3qY7TkWXL3MRpmDYwuYr6m2YIiJilH4EE5wzI4lRgycGrwBzZQWRkh1hVup8I71JqFK9DZOwhN5E7r0TeapFArejaLY5ZMDdHoa2999NVOk%2FaPzZE5oW48j2viu67%2BpjN4LX5uHHDUgWt0PRDUttd4UQN1RmnxDUGWCIULl%7Ctkp%3ABFBM8qOQ7P9h', 3, false),
('Yeezy Boost 350 V2', 'https://www.farfetch.com/https://media.blackandwhite-ff.com/10000/10000/83667c00-5c61-4b68-b4cc-3ffe534ab30d_YeezyBoost350TURTLEDOVE.jpg', 'Adidas', 'September 2016', 220, 'https://www.ebay.com/itm/166055429204?var=465561952864&epid=16039797944&hash=item26a9acc454:g:R-8AAOSwB1hkSY9O&amdata=enc%3AAQAIAAAA4KWR7ubbRUoB8fPkcy0cc2hZd%2BmosXw26Javc3VlUKPTLeoOF8isJKsNCwmBHVQRdVTu9sW%2BbMSMrMCm2X8BipnI1sncN0S7lguM7oBIVTkCZJ0AzEIgjdd%2FLzPynWAI1bFQI9NDx%2FAo4GwfUHOcpsGooth1rQrknjO%2BHJIt2auQy3OqTW3yv%2B0vwuh%2Bsf4jRHB4zAcEHmneIVX5J%2Fxjtm%2FKmDk3ejEXJ%2BsPxa6QOwmOi%2Fuk21Ennf3HMws5VopOtmHyEEVqO09huUMwNo%2BuTeGxizvSCIYIct8X3kEZq7yo%7Ctkp%3ABFBMpo-F7P9h', 2, true);


INSERT INTO reviews ( reviewer, title, content, rating, sneaker_ID) VALUES
('Evan', 'My Favorite', 'These sneakers crush it when it comes to awesome kicks', 3, 1),
('Kristie', 'My Favorite', 'This crushes it when it comes to inspiring me', 3, 2);



SELECT * FROM sneakers;

SELECT * FROM reviews;

