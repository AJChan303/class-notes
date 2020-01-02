


USE [PRSv1]
GO

ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_Products_Vendors_VendorId]
GO

/****** Object:  Table [dbo].[Products]    Script Date: 9/25/2019 1:10:36 PM ******/
DROP TABLE [dbo].[Products]
GO

/****** Object:  Table [dbo].[Products]    Script Date: 9/25/2019 1:10:36 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PartNbr] [nvarchar](30) NOT NULL,
	[Name] [nvarchar](30) NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[Unit] [nvarchar](30) NOT NULL,
	[PhotoPath] [nvarchar](255) NULL,
	[VendorId] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Vendors_VendorId] FOREIGN KEY([VendorId])
REFERENCES [dbo].[Vendors] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Vendors_VendorId]
GO

USE [PRSv1]
GO

/****** Object:  Table [dbo].[Vendors]    Script Date: 9/25/2019 1:56:00 PM ******/
DROP TABLE [dbo].[Vendors]
GO

/****** Object:  Table [dbo].[Vendors]    Script Date: 9/25/2019 1:56:00 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Vendors](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](30) NOT NULL,
	[Name] [nvarchar](30) NOT NULL,
	[Address] [nvarchar](30) NOT NULL,
	[City] [nvarchar](30) NOT NULL,
	[State] [nvarchar](2) NOT NULL,
	[Zip] [nvarchar](5) NOT NULL,
	[Phone] [nvarchar](12) NULL,
	[Email] [nvarchar](255) NULL,
 CONSTRAINT [PK_Vendors] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [PRSv1]
GO

INSERT INTO [dbo].[Vendors]
           ([Code]
           ,[Name]
           ,[Address]
           ,[City]
           ,[State]
           ,[Zip]
           )
     VALUES
           ('AF234', 'Ashley"s Furniture', '5489 Eastgate blvd.', 'cincinnati', 'OH', '45245'),
		    ('Stap78', 'Staple"s', '3889 Beechmont Ave', 'Cincinnati', 'OH', '45852'),
			 ('Micro23', 'Microsoft', 'One Microsoft Way', 'Seattle', 'OH', '45256'),
			  ('goo32', 'Google', '2341 Markham Dr.', 'Salt Lake City', 'OH', '78954'),
			   ('IK21', 'IKEA', '1258 West Minster Blvd', 'Cincinnati', 'OH', '78541'),
			    ('MC432', 'MicroCenter', '4895 Moesteller Rd.', 'Cincinnati', 'OH', '34524')
				
GO


USE [PRSv1]
GO

INSERT INTO [dbo].[Products]
           ([PartNbr]
           ,[Name]
           ,[Price]
           ,[Unit]
           
           ,[VendorId])
     VALUES
           ('Desk131', 'Small Oak Desk', 50.00, 'ea', 1),
		   ('Desk232', 'Medium Desk', 75.00, 'ea', 5),
		   ('Desk343', 'Executive Work Desk', 299.99, 'ea', 2),
		   ('Ace231', 'Acer WorkBook Pro', 1099.99, 'ea', 2),
		   ('MSurf3', 'Microsoft Surface Pro3', 899.99, 'ea', 3),
		   ('big', 'Biggest Baddest Laptop', 2299.99, 'ea', 4),
		   ('pn32', 'Post-It Notes', 2.99, 'ea', 2),
		   ('prm231', 'Printer Paper', 5.99, '/ream', 2),
		   ('pen52', 'Ball Point Pens', 4.99, '4pack', 2),
		   ('3rb', '3-ring Binder', 1.99, 'ea', 2),
		   ('os989', 'Osgood Leather Chair', 99.99, 'ea', 1),
		   ('Fin31', 'The Finely', 59.99, 'ea', 5),
			('Exec212', 'The Executive Lounger', 599.99, 'ea', 1),
			('lg313', 'Logitech g313', 19.99, 'ea', 6),
		   ('Cors456', 'Corsair 4302', 59.99, 'ea', 6),
		   ('mm132', 'Razer Odyssey Mat ', 39.99, 'ea', 6),
		   ('mp12', 'Standard MousePad ', 4.99, 'ea', 6)
GO


