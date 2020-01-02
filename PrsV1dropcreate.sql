
go
drop database PRSv1;
go

Create Database PRSv1;
go
use PRSv1
go
Create Table Users (
 Id int not null primary key Identity(1,1),
 Username Nvarchar(255) not null, --unique
 Password Nvarchar(30) not null,
 Firstname Nvarchar(30) not null,
 Lastname Nvarchar(30) not null,
 Phone nvarchar(15),
 Email nvarchar(255),
 IsReviewer Bit not null default 0,
 IsAdmin Bit not null default 0);

 
 go
 Create Table Vendors (
 Id int not null primary key identity(1,1),
 Code nvarchar(30) not null, --unique
 Name Nvarchar(50) not null,
 Address nvarchar(100) not null,
 City nvarchar(30) not null,
 State nvarchar(3) not null,
 Zip nvarchar(10) not null,
 Phone nvarchar(15),
 Email nvarchar(255));
go
go
Create Table Products (
Id int not null Primary key identity(1,1),
PartNbr nvarchar(30) not null, -- unique
Name nvarchar(30) not null,
Price decimal(12,2) not null,
Unit nvarchar(30) not null,
PhotoPath nvarchar(255),
VendorId int not null Foreign key references Vendors(Id)
);)
go 
go
Create Table Requests (
Id int Primary Key Identity(1,1),
Description nvarchar(80) not null,
Justification nvarchar(80) not null,
DeliveryMode nvarchar(20) not null default 'pickup',
Status nvarchar(10) not null default 'new',
Total decimal(12,2) not null default 0,
UserId int not null Foreign key References Users(Id),
DateRequested datetime not null,
DateSubmitted datetime not null
);
go
go
Create Table RequestLines (
Id int primary key not null identity(1,1),
RequestId int not null foreign key references Requests(Id),
ProductId int not null foreign key references Products(Id),
Quantity int not null default 1);
go