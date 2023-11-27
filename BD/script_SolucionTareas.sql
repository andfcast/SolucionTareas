USE [RegistroTareasBD]
GO
ALTER TABLE [dbo].[Tarea] DROP CONSTRAINT [FK_Tarea_Usuario]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 27/11/2023 12:10:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Usuario]') AND type in (N'U'))
DROP TABLE [dbo].[Usuario]
GO
/****** Object:  Table [dbo].[Tarea]    Script Date: 27/11/2023 12:10:14 p. m. ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Tarea]') AND type in (N'U'))
DROP TABLE [dbo].[Tarea]
GO
USE [master]
GO
/****** Object:  Database [RegistroTareasBD]    Script Date: 27/11/2023 12:10:14 p. m. ******/
DROP DATABASE [RegistroTareasBD]
GO
