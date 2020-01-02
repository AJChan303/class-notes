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


