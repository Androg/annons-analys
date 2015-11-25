package se.eh.service.dao;

import se.eh.service.model.JobAd;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public final class JobAdDaoImpl {

    private Connection connection;
    private Statement statement;
    private ResultSet resultSet;

    public JobAd getAllUrls() throws SQLException {
        Properties properties = new Properties();


        try {
            properties.load(this.getClass().getResourceAsStream("/mysql/mysql.properties"));
            Class.forName(properties.getProperty("driver_class"));

            connection = DriverManager.getConnection(
                    properties.getProperty("url"),
                    properties.getProperty("username"),
                    properties.getProperty("password"));

            statement = connection.createStatement();
            resultSet = statement.executeQuery("SELECT * FROM urls");

            JobAd jobAd = null;
            while (resultSet.next()) {
                jobAd = new JobAd();
                jobAd.setUrl(resultSet.getString("urls.url"));
            }

            return jobAd;

        } catch (IOException e) {
            e.printStackTrace();
            return null;
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        } finally {
            this.close();
        }
    }



    private void close() throws SQLException {
        try {
            if(resultSet != null) {
                resultSet.close();
            }
            if(connection != null) {
                connection.close();
            }
            if(statement != null) {
                statement.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public String toString() {
        return String.valueOf(resultSet);
    }
}
