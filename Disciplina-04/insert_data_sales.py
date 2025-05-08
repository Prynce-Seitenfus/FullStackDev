import pandas as pd

address = 'C:\\Users\\prync\\OneDrive\\Documentos\\GitHub\\FullStackDev-1\\Disciplina-04\\'

salesperson = pd.read_csv(address + 'salesperson.csv', sep=';', index_col=False)
print("Salesperson DataFrame:")
print(salesperson)

tb_salesperson = pd.DataFrame(salesperson)
print("Tb Salesperson DataFrame:")
print(tb_salesperson)

import sqlalchemy as sa

engine = sa.create_engine("sqlite:///Disciplina-04//sales.db")

import sqlalchemy.orm as orm

session = orm.sessionmaker(bind=engine)
session = session()

import orm_db_sales as sl

for i in range(len(tb_salesperson)):
    new_salesperson = sl.Saleperson(
        cpf=tb_salesperson['cpf'].iloc[i],
        name=tb_salesperson['name'].iloc[i],
        email=tb_salesperson['email'].iloc[i],
        phone=tb_salesperson['phone'].iloc[i],
        salary=tb_salesperson['salary'].iloc[i],
        neighborhood=tb_salesperson['neighborhood'].iloc[i],
        city=tb_salesperson['city'].iloc[i],
        state=tb_salesperson['state'].iloc[i],
        address=tb_salesperson['address'].iloc[i],
        commission=tb_salesperson['commission'].iloc[i]
    )
    try:
        session.add(new_salesperson)
        session.commit()
    except Exception as e:
        print(f"Error inserting {new_salesperson.name}: {e}")
        session.rollback()

print("Data inserted successfully!")
