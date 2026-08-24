import sqlite3
import os


# =====================================================
# DATABASE LOCATION
# =====================================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DATABASE = os.path.join(
    BASE_DIR,
    "database.db"
)


# =====================================================
# CONNECT TO DATABASE
# =====================================================

def get_db():

    conn = sqlite3.connect(
        DATABASE,
        timeout=30
    )

    conn.row_factory = sqlite3.Row

    return conn


# =====================================================
# CREATE DATABASE TABLES
# =====================================================

def init_db():

    conn = get_db()

    try:

        # =============================================
        # USERS
        # =============================================

        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )
        """)


        # =============================================
        # CONTACT MESSAGES
        # =============================================

        conn.execute("""
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL
            )
        """)


        # =============================================
        # QUOTE REQUESTS
        # =============================================

        conn.execute("""
            CREATE TABLE IF NOT EXISTS quotes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                service TEXT NOT NULL,
                budget TEXT NOT NULL,
                message TEXT NOT NULL
            )
        """)


        conn.commit()

        print("Database initialized successfully.")

    except Exception as error:

        conn.rollback()

        print("DATABASE ERROR:", error)

        raise

    finally:

        conn.close()


# =====================================================
# CREATE DATABASE WHEN FILE IS RUN DIRECTLY
# =====================================================

if __name__ == "__main__":

    init_db()

    print("Database created successfully!")
    print("Database location:")
    print(DATABASE)
