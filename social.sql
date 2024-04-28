-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2024 at 01:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `social`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `descr` varchar(5000) NOT NULL,
  `createdAt` date NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `descr`, `createdAt`, `userId`, `postId`) VALUES
(1, 'test comment', '2024-03-24', 6, 6),
(2, 'new test comment', '2024-03-30', 6, 6),
(3, 'new comment for testing feature', '2024-03-30', 6, 6),
(4, 'loooooooooool', '2024-03-30', 6, 4),
(5, 'test', '2024-03-30', 7, 4),
(6, 'new com', '2024-03-30', 7, 6);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`userId`, `postId`) VALUES
(6, 4),
(6, 5),
(6, 2),
(6, 1),
(7, 4),
(7, 1),
(7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `descr` varchar(5000) NOT NULL,
  `img` varchar(5000) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `descr`, `img`, `userId`, `createdAt`) VALUES
(1, 'test', '', 6, '2024-03-24 00:00:00'),
(2, 'test 2', '', 6, '2024-03-24 00:00:00'),
(3, 'test', '', 6, '2024-03-30 05:28:41'),
(4, 'this is a new post', '', 6, '2024-03-30 05:28:52'),
(5, 'test with image', '', 6, '2024-03-30 05:40:30'),
(6, 'test with image', '1711757453284Screenshot 2023-08-12 132147.png', 6, '2024-03-30 05:40:53'),
(7, 'Testing', '', 10, '2024-03-30 21:22:25'),
(8, 'Test', '1711813981498.DS_Store', 10, '2024-03-30 21:23:01'),
(10, 'TEEEEEST', '1714302541851cover-1708766970000.jpg', 11, '2024-04-28 16:39:01'),
(11, 'Teeest 2 ', '1714302554017cover-1708767488557.jpg', 11, '2024-04-28 16:39:14'),
(12, 'Test 33333333', '', 11, '2024-04-28 17:02:31'),
(13, 'teest 33333333333333333333333333333', '17143039760401712202490619Modern Colorful Collaboration Strategy Diagram Brainstorm.png', 11, '2024-04-28 17:02:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `name`) VALUES
(1, 'mc_jayarathna', 'chamika.app@gmail.com', '$2a$10$9O4lBHzhynLG/MWCPTiyOOJukeMIp.Run32mlgtMKg8nFLZ3.ztaa', 'chamika'),
(2, 'dilshani-balasooriya', 'dilshanibalasoorya09@gmail.com', '$2a$10$s0rv8QBzcrDkNbAObgmW3u2j7EUDtnIWk.BaViTxQ6V35fUb6O.ou', 'Dilshani Balasooriya'),
(5, 'dil', 'dil@123.gmail.com', '$2a$10$G7oSYLieTn7xdZQSm5E98eMulgHnWsn8MoGCPbAxBIbgDCUV6r9HG', 'dil'),
(6, 'akila', 'akilajava99@gmail.com', '$2a$10$ImsEyKZaBlSVHVPLoMfngua29TkNGieY.h7AI6RUwIDGcZUYIgWYi', 'akila'),
(7, 'vish', 'vish@gmail.com', '$2a$10$eszmrcdkDS0Ftd/1Czgq/ugj8aZJEeXYEw49ZrkcDCwEMukkPtFVO', 'vish65610'),
(8, 'dinethlm', 'test@test.com', '$2a$10$Z9RVd1rg0WwZv.XDyNeRH.LITDxcxGIysE2dLyQEI4uAx2wwlJteW', 'test123'),
(9, 'testing', 'test2@test.com', '$2a$10$upX/G.7vvkv0QsGVqzMSdeXmsWdiOFZwkcGhpo0STHYCzvnFe2dnq', 'test2'),
(10, 'abc', 'abc@abc.com', '$2a$10$dhr5qu/T4jtouNF.ENfBGegcqEjMTkG9SUFLPJsf8KzuhpbqB6s0i', 'abc'),
(11, 'test', 'test@test,com', '$2a$10$bf6lvxN8rerGMX00VY6JkeUjHRBzKMZk9UAfCPcusNQrvf4yfx48m', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `Fk_1` (`userId`),
  ADD KEY `Fk_2` (`postId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `Fk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `Fk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
