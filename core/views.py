from django.shortcuts import render

import datetime

def date_validate(date_text):
  if date_text:
    try:
        return datetime.datetime.strptime(date_text, '%Y-%m-%d')
    except ValueError:
        raise ValueError("Incorrect date format, should be YYYY-MM-DD")
  

def get_points_per_miles(miles):
  points=0.0
  try:
    if float(miles)>0.0:
      points=.2*miles
      return points
    else:
      print("Must be greater than 0") 
  except ValueError:
    raise ValueError("Incorrect data format")  



def durability_calculation(d_type=1,miles=0,from_date=None,to_date=None):
  durabilty_points=0.0
  try:
    if(int(d_type)>0):
      if date_validate(from_date) and date_validate(to_date):
        from_date=date_validate(from_date)
        to_date=date_validate(to_date)
        if to_date > from_date:
          date_dif=to_date-from_date
          days=date_dif.days
          if d_type==1:
            durabilty_points=days*1
          elif d_type==2:
            durabilty_points=days*2
          if float(miles)>0:
            durabilty_points +=get_points_per_miles(miles)
        else:
          print("From date greater or equal to date")    
  except ValueError:
      raise ValueError("Incorrect type format")
  return durabilty_points


def rent_fee_calculation(name,group_id,message="User"):
    msg =message + ' not found ! Please Submit Again'
    if user:
        return user
    else :
        raise serializers.ValidationError({"error": _(msg)})

