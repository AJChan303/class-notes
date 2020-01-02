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


