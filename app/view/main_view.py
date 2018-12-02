from flask import Blueprint, request, jsonify

from controller.main_controller import get_all_teams, create_team, get_team, update_team, delete_team, create_team_member, update_team_member, delete_team_member, correct_password, get_team_members, get_id_from_uuid, team_uuid_exists

#teams = Blueprint('teams', __name__, url_prefix='/teams')
@app.route('/team/<team_uuid>/<team_member_id>',methods=['POST','DELETE','PUT'])
def team_members(team_uuid,team_member_id):
    if team_uuid_exists(team_uuid)==False:
        return jsonify({'error':'team_uuid not found'}),404
    if request.method is 'DELETE':
        success = delete_team(team_member_id)
        if not success:
            return jsonify({'error': 'team member not found'}), 404
        return jsonify({}), 204
    if request.method is 'POST':
        if len(get_team_members(get_id_from_uuid(team_uuid)))<4:
            body = request.json
            create_team_member(body)
    if request.method is 'PUT':
        body = request.json
        updated = update_team_member(body)
        if updated is None:
            return jsonify({'error': 'team with unique id {} not found'.format(team_uuid)}), 404
        return jsonify(updated), 200
        
@app.route('/team/<team_uuid>',methods=['DELETE'])
def remove_team(team_uuid):
    success = delete_team(team_uuid)
    if not success:
        return jsonify({'error': 'team not found'}), 404
    return jsonify({}), 204

@app.route('/team/<team_uuid>', methods=['PUT'])
def change_team(team_uuid):
    body = request.json
    updated=update_team(body)
    if updated is None:
        return jsonify({'error': 'team not found'}), 404
    return jsonify(updated), 200

@app.route('/listaTimova', methods=['GET'])
def all_teams():
    all_teams = get_all_teams()
    response_body = [t.to_dict() for t in all_teams]
    return jsonify(response_body), 200

@app.route('/register', methods=['POST'])
def register():
    body = request.json
    if len(body['team_member'])<3 or len(body['team_member']>4):
        return jsonify({'msg':'INCORRECT NUMBER OF MEMBERS'}), 400
    created = create_team(body)
    if created == False:
        return jsonify({'msg':"TEAM NAME ALREADY EXISTS"}), 422
    return jsonify({'msg':"OK"}), 201

@app.route('/login/<team_name>', methods=['POST'])
def login(team_name):
    body = request.json
    a,result = correct_password(team_name,body['passowrd'])
    if a is False:
        return jsonify({'error': 'team not found'}), 404
    return result, 200