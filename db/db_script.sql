drop database if exists dbsavory;
create database if not exists dbsavory;
use dbsavory;
create table if not exists users (
  id int not null auto_increment,
  firstname varchar(50),
  lastname varchar(50),
  email varchar(50) not null unique,
  phonenummber varchar(15),
  datecreated date,
  datemodified date,
  primary key(id)
);
create table if not exists lookupbudgetitemtypes (
  id int not null auto_increment,
  typename varchar(50),
  typedescription varchar(250),
  datecreated date,
  datemodified date,
  primary key(id)
);
create table if not exists lookupbudgetitemcategories (
  id int not null auto_increment,
  categoryname varchar(50),
  categorydescription varchar(250),
  datecreated date,
  datemodified date,
  primary key(id)
);
create table if not exists lookupbudgetitems (
  id int not null auto_increment,
  itemcode varchar(5),
  itemname varchar(50),
  itemdescription varchar(250),
  itemtypeid int,
  itemcategoryid int,
  sortingorder int,
  datecreated date,
  datemodified date,
  primary key(id),
  constraint fk_budgetitemtype foreign key (itemtypeid) references lookupbudgetitemtypes(id),
  constraint fk_budgetitemcategory foreign key (itemcategoryid) references lookupbudgetitemcategories(id)
);
create table if not exists usersbudget (
  id int not null auto_increment,
  userid int,
  budgetitemid int,
  budgetvalue float,
  budgetdate date,
  datecreated date,
  datemodified date,
  primary key(id),
  constraint fk_userssystembudgetitem foreign key (budgetitemid) references lookupbudgetitems(id),
  constraint fk_usersbudget foreign key (userid) references users(id)
);
create table if not exists usersexpenses (
  id int not null auto_increment,
  userid int,
  budgetitemid int,
  expensevalue float,
  expensecomments varchar(250),
  dateofexpense date,
  datecreated date,
  datemodified date,
  primary key(id),
  constraint fk_usersexpensesbudgetitem foreign key (budgetitemid) references lookupbudgetitems(id),
  constraint fk_usersexpenses foreign key (userid) references users(id)
);

DROP PROCEDURE IF EXISTS `sp_lookupbudgetitems_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_lookupbudgetitems_sel` ()
BEGIN
	SELECT
	  lbi.id,
	  lbi.itemcode,
	  lbi.itemname,
	  lbi.itemdescription,
	  lbi.itemtypeid,
	  lbi.itemcategoryid,
	  lbi.sortingorder,
	  lbi.datecreated,
	  lbi.datemodified
	FROM
	  lookupbudgetitems AS lbi
	ORDER BY
	  sortingorder ASC;
END$$
DELIMITER ;

