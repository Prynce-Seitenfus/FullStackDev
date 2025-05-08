import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine('sqlite:///Disciplina-04//police.db')
base = orm.declarative_base()

class PoliceStation(base):
    __tablename__ = 'police_station'
    code_ps = sa.Column(sa.INTEGER, primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    address = sa.Column(sa.VARCHAR(255), nullable=False)

class Reponsable(base):
    __tablename__ = 'reponsable'
    code_ps = sa.Column(sa.INTEGER, primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)

class City(base):
    __tablename__ = 'city'
    code_issuer = sa.Column(sa.INTEGER, primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    neiborhood = sa.Column(sa.VARCHAR(25), nullable=False)

class PoliceReport(base):
    __tablename__ = 'police_report'
    report = sa.Column(sa.INTEGER, primary_key=True, index=True)
    code_ps = sa.Column(sa.INTEGER, sa.ForeignKey('police_station.code_ps'))
    code_issuer = sa.Column(sa.INTEGER, sa.ForeignKey('city.code_issuer'))
    __table_args__ = (
        sa.ForeignKeyConstraint(['code_ps'], ['police_station.code_ps'], ondelete='NO ACTION', onupdate='CASCADE'),
        sa.ForeignKeyConstraint(['code_issuer'], ['city.code_issuer'], ondelete='NO ACTION', onupdate='CASCADE'),
    )
    date = sa.Column(sa.DATE, nullable=False)
    description = sa.Column(sa.VARCHAR(255), nullable=False)
    crime_type = sa.Column(sa.VARCHAR(100), nullable=False)

try:
    base.metadata.create_all(engine) # Create tables if they don't exist
    print("Tables created successfully.")
except Exception as e:
    print(f"Error creating tables: {e}")