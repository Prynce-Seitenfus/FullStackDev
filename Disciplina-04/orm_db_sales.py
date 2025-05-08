import sqlalchemy as sa

engine = sa.create_engine('sqlite:///Disciplina-04//sales.db')

import sqlalchemy.orm as orm

base = orm.declarative_base()

# Client table
class Client(base):
    __tablename__ = 'client'
    cpf = sa.Column(sa.CHAR(14), primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    email = sa.Column(sa.VARCHAR(50), nullable=False)
    sex = sa.Column(sa.CHAR(1))
    salary = sa.Column(sa.DECIMAL(10, 2))
    day_month_niver = sa.Column(sa.CHAR(5))
    neighborhood = sa.Column(sa.VARCHAR(50))
    city = sa.Column(sa.VARCHAR(50))
    state = sa.Column(sa.VARCHAR(2))
    address = sa.Column(sa.VARCHAR(100))

# Supplier table
class Supplier(base):
    __tablename__ = 'supplier'
    cnpj = sa.Column(sa.CHAR(18), primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    email = sa.Column(sa.VARCHAR(50), nullable=False)
    phone = sa.Column(sa.VARCHAR(15))
    neighborhood = sa.Column(sa.VARCHAR(50))
    city = sa.Column(sa.VARCHAR(50), nullable=False)
    state = sa.Column(sa.VARCHAR(2))
    address = sa.Column(sa.VARCHAR(100))

# Product table
class Product(base):
    __tablename__ = 'product'
    code = sa.Column(sa.INTEGER, primary_key=True, index=True)
    cnpj = sa.Column(sa.CHAR(18), sa.ForeignKey('supplier.cnpj'))
    __table_args__ = (
        sa.ForeignKeyConstraint(['cnpj'], ['supplier.cnpj'], ondelete='NO ACTION', onupdate='CASCADE'),
    )
    description = sa.Column(sa.VARCHAR(100), nullable=False)
    price = sa.Column(sa.DECIMAL(10, 2), nullable=False)

# Saleperson table  
class Saleperson(base):
    __tablename__ = 'saleperson'
    cpf = sa.Column(sa.CHAR(14), primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    email = sa.Column(sa.VARCHAR(50), nullable=False)
    phone = sa.Column(sa.VARCHAR(15))
    salary = sa.Column(sa.DECIMAL(10, 2))
    neighborhood = sa.Column(sa.VARCHAR(50))
    city = sa.Column(sa.VARCHAR(50))
    state = sa.Column(sa.VARCHAR(2))
    address = sa.Column(sa.VARCHAR(100))
    commission = sa.Column(sa.DECIMAL(10, 2))

# Sale table
class Sale(base):
    __tablename__ = 'sale'
    id = sa.Column(sa.INTEGER, primary_key=True, index=True)
    cpf = sa.Column(sa.CHAR(14), sa.ForeignKey('client.cpf'))
    cpf_seller = sa.Column(sa.CHAR(14), sa.ForeignKey('saleperson.cpf'))
    code = sa.Column(sa.INTEGER, sa.ForeignKey('product.code'))
    date = sa.Column(sa.DATE, nullable=False)
    quantity = sa.Column(sa.INTEGER, nullable=False)
    __table_args__ = (
        sa.ForeignKeyConstraint(['cpf'], ['client.cpf'], ondelete='NO ACTION', onupdate='CASCADE'),
        sa.ForeignKeyConstraint(['cpf_seller'], ['saleperson.cpf'], ondelete='NO ACTION', onupdate='CASCADE'),
        sa.ForeignKeyConstraint(['code'], ['product.code'], ondelete='NO ACTION', onupdate='CASCADE'),
    )

try:
    base.metadata.create_all(engine) # Create tables if they don't exist
    print("Tables created successfully.")
except Exception as e:
    print(f"Error creating tables: {e}")

    