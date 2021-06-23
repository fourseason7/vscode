import pyodbc
conn = pyodbc.connect('DSN=P4NET;UID=p4net_user;PWD=p4net_u52r')
crsr = conn.cursor()
rows = crsr.execute("select @@VERSION").fetchone()
print(rows)
crsr.close()
conn.close()
