import  pyodbc
#conn = pyodbc.connect('DSN=P4NET;UID=p4net_user;PWD=p4net_u52r')
conn = pyodbc.connect(
	server='p4nets.ddns.net',
	port='20143',
	tds_version = '7.3',
	user='p4net_user',
	password='p4net_u52r',
	driver='FreeTDS'
)
crsr = conn.cursor()
rows = crsr.execute("select @@VERSION").fetchone()
print(rows)
crsr.close()
conn.close()
