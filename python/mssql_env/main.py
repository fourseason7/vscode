import pyodbc

# 서버 주소(DB 접속ip)
server = "p4nets.ddns.net"
port = "20143"

# 접속 유저
user = "p4net_user"

# 패스워드
pasword = "p4net_u52r"

# 데이터베이스명
db = "P4N_HRM_DEV"


cnxn = pyodbc.connect(
  "DRIVER=FreeTDS;SERVER=" + server + ";PORT=" + port + ";uid=" + user + ";pwd=" + pasword + ";DATABASE=" + db
  )

cursor = cnxn.cursor()
# cursor.execute("SELECT @@version;")
cursor.execute("select * from person.person")
row = cursor.fetchone()
while row:
  print (row[0], row[1], row[3])
  row = cursor.fetchone()
  
cursor.close()
cnxn.close()  
  
