\c act;

grant connect on database act to actblue;
grant usage on schema public to actblue;
grant all privileges on all tables in schema public to actblue;
grant all privileges on all sequences in schema public to actblue;

create table contributions (
  orderNumber varchar (30),
  createdAt timestamp not null,
  recurringPeriod integer not null,
  recurringDuration integer not null,
  uniqueIdentifier varchar (50) unique not null,
  status integer not null,
  firstname varchar (60),
  lastname varchar (60),
  city varchar (60),
  state varchar (60),
  zip varchar (20),
  country varchar (30),
  email varchar (60),
  phone varchar (60),
  amount float
);
