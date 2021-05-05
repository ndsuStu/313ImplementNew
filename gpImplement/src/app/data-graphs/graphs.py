#created by Dylan Schaefer
import matplotlib.pyplot as pd
import datetime as dt

dates = [dt.date(2020, 8, 8),
dt.date(2020, 8, 9),
dt.date(2020, 8, 10),
dt.date(2020, 8, 11),
dt.date(2020, 8, 12),
dt.date(2020, 8, 13),
dt.date(2020, 8, 14)]

income = [1342,
1645,
4535,
4534,
4534,
4864,
4852]

pd.ioff()
pd.xlabel('Date')
pd.ylabel('Income (In USD)')
pd.title('Weekly Income')
pd.plot_date(dates, income, '-g')
pd.tick_params(axis='x', which='major', labelsize=6)
pd.savefig("src/app/data-graphs/graph.png")